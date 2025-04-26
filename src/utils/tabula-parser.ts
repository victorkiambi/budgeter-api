import * as path from 'path';
import * as fs from 'fs';
import tabula = require('tabula-js');
import { ParsedTransaction } from '../types/statement.types';

/**
 * Parse M-PESA statement using tabula-js table extraction
 * Note: This requires Java to be installed as tabula-js uses tabula-java under the hood
 */
export async function parseMpesaStatementWithTabula(pdfPath: string): Promise<ParsedTransaction[]> {
  try {
    console.log(`\n=== Processing M-PESA statement with tabula-js: ${pdfPath} ===`);
    
    // Create a tabula instance for the PDF
    const t = tabula(pdfPath, {
      silent: false // Show tabula output for debugging
    });
    
    // Extract tables from all pages
    const result = await t.extract({
      pages: 'all',
      spreadsheet: true, // Better for detecting tables
      guess: false,
      // We need to handle multiple page formats, so don't restrict area too much
      area: [10, 10, 90, 90], // Extract from 10% to 90% of the page (y1, x1, y2, x2)
      format: 'JSON'
    });
    
    // Parse the JSON result
    let tables: any[] = [];
    if (typeof result === 'string') {
      try {
        tables = JSON.parse(result);
      } catch (e) {
        console.error('Error parsing JSON result:', e);
        return [];
      }
    } else {
      tables = result;
    }
    
    console.log(`Extracted ${tables.length} tables from the PDF`);
    
    const transactions: ParsedTransaction[] = [];
    let foundTransactionTable = false;
    
    // Process each table
    for (const table of tables) {
      if (!table || !table.data || table.data.length === 0) {
        continue;
      }
      
      console.log(`Processing table with ${table.data.length} rows on page ${table.page}`);
      
      // Look for the header row in this table
      let headerRow: string[] | null = null;
      let headerRowIndex = -1;
      
      for (let i = 0; i < table.data.length; i++) {
        const row = table.data[i];
        // Check if this row contains receipt/completion time/status which are our key headers
        const headerIndicators = ['Receipt No', 'Completion Time', 'Details', 'Transaction Status'];
        const hasHeaders = headerIndicators.some(header => 
          row.some((cell: string) => cell && cell.includes(header))
        );
        
        if (hasHeaders) {
          headerRow = row;
          headerRowIndex = i;
          break;
        }
      }
      
      if (!headerRow || headerRowIndex === -1) {
        console.log('No header row found in this table, skipping');
        continue;
      }
      
      console.log('Found transaction table header:', headerRow);
      foundTransactionTable = true;
      
      // Map column headers to indices
      const headerMap: Record<string, number> = {};
      for (let i = 0; i < headerRow.length; i++) {
        const cellContent = headerRow[i];
        if (!cellContent) continue;
        
        // Map standard column names
        if (cellContent.includes('Receipt No')) {
          headerMap['Receipt No'] = i;
        } else if (cellContent.includes('Completion Time')) {
          headerMap['Completion Time'] = i;
        } else if (cellContent.includes('Details')) {
          headerMap['Details'] = i;
        } else if (cellContent.includes('Transaction Status')) {
          headerMap['Transaction Status'] = i;
        } else if (cellContent.includes('Paid in')) {
          headerMap['Paid in'] = i;
        } else if (cellContent.includes('Withdraw')) {
          headerMap['Withdrawn'] = i;
        } else if (cellContent.includes('Balance')) {
          headerMap['Balance'] = i;
        }
      }
      
      console.log('Column mapping:', headerMap);
      
      // Process data rows (skip header)
      const dataRows = table.data.slice(headerRowIndex + 1);
      
      for (const row of dataRows) {
        // Skip empty rows or rows that don't have enough cells
        if (!row || row.length < 4) continue;
        
        // Skip rows that don't look like transaction rows
        const receiptCell = row[headerMap['Receipt No'] || 0];
        if (!receiptCell || !receiptCell.match(/^[A-Z0-9]{10}/)) {
          continue;
        }
        
        console.log('Processing transaction row:', row);
        
        try {
          // Extract data using column mapping
          const receiptNo = receiptCell.trim();
          const completionTime = row[headerMap['Completion Time'] || 1]?.trim();
          const details = row[headerMap['Details'] || 2]?.trim();
          const status = row[headerMap['Transaction Status'] || 3]?.trim();
          
          let paidIn = 0;
          if (headerMap['Paid in'] !== undefined && row[headerMap['Paid in']]) {
            const paidInStr = row[headerMap['Paid in']].trim();
            paidIn = parseFloat(paidInStr.replace(/,/g, '')) || 0;
          }
          
          let withdrawn = 0;
          if (headerMap['Withdrawn'] !== undefined && row[headerMap['Withdrawn']]) {
            const withdrawnStr = row[headerMap['Withdrawn']].trim();
            withdrawn = parseFloat(withdrawnStr.replace(/,/g, '')) || 0;
          }
          
          // Skip rows without essential data
          if (!completionTime || !status) {
            console.log('Missing essential data (time or status), skipping row');
            continue;
          }
          
          // Determine transaction type
          let type: 'income' | 'expense' | 'transfer' = 'transfer';
          if (paidIn > 0 && withdrawn === 0) {
            type = 'income';
          } else if (withdrawn > 0 && paidIn === 0) {
            type = 'expense';
          }
          
          // Extract merchant from description
          let merchant = '';
          if (details) {
            if (details.includes(' to ')) {
              const parts = details.split(' to ');
              if (parts.length > 1) {
                merchant = parts[1].split(/\s+-|\s+Acc\.|\s+Account/)[0].trim();
              }
            } else if (details.includes(' from ')) {
              const parts = details.split(' from ');
              if (parts.length > 1) {
                merchant = parts[1].split(/\s+-|\s+via/)[0].trim();
              }
            }
          }
          
          // Refine transaction type based on description
          if (details) {
            if (details.includes('Business Payment from')) {
              type = 'income';
            } else if (details.includes('Funds received from')) {
              type = 'income';
            } else if (details.includes('Pay Bill')) {
              type = 'expense';
            } else if (details.includes('Merchant Payment')) {
              type = 'expense';
            } else if (details.includes('Customer Transfer to')) {
              type = 'expense';
            }
          }
          
          // Create transaction object
          const transaction: ParsedTransaction = {
            timestamp: new Date(completionTime),
            amount: withdrawn > 0 ? withdrawn : paidIn,
            description: details || '',
            reference: receiptNo,
            status,
            type,
            merchant
          };
          
          console.log('Parsed transaction:', JSON.stringify(transaction, null, 2));
          transactions.push(transaction);
        } catch (err) {
          console.error('Error processing row:', err);
        }
      }
    }
    
    if (!foundTransactionTable) {
      console.log('Could not find transaction tables in the PDF');
    }
    
    // Sort transactions by date
    transactions.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    
    return transactions;
  } catch (error) {
    console.error('Error parsing M-PESA statement with tabula-js:', error);
    throw error;
  }
}

/**
 * Fallback approach using direct text extraction for M-PESA statements
 * This can be used if tabula-js fails or is not available
 */
export async function parseTextBasedStatement(pdfPath: string): Promise<ParsedTransaction[]> {
  try {
    console.log(`\n=== Processing M-PESA statement with text-based approach: ${pdfPath} ===`);
    
    // Use PDFExtract or pdf-parse here to extract raw text
    // For now, returning empty array as placeholder
    return [];
  } catch (error) {
    console.error('Error with text-based parsing:', error);
    return [];
  }
}