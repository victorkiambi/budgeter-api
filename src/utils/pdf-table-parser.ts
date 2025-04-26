import * as fs from 'fs';
import * as path from 'path';
import { PDFExtract, PDFExtractOptions } from 'pdf.js-extract';
import { BankStatementTemplate, ParsedTransaction } from '../types/statement.types';

const pdfExtract = new PDFExtract();
const options: PDFExtractOptions = {};

/**
 * Extract M-PESA transactions from PDF statement using pdf.js-extract
 * This provides better handling of table structure than pdf-parse
 */
export async function extractMpesaTransactionsFromPDF(pdfPath: string): Promise<ParsedTransaction[]> {
  try {
    console.log(`\n=== Processing M-PESA statement: ${pdfPath} ===`);
    
    // Extract data from PDF
    const data = await pdfExtract.extract(pdfPath, options);
    console.log(`PDF has ${data.pages.length} pages`);
    
    const transactions: ParsedTransaction[] = [];
    let inTransactionTable = false;
    let foundHeaders = false;
    
    // These will help us identify the column positions
    const columnPositions: { [key: string]: number } = {};
    
    // Process each page
    for (const page of data.pages) {
      console.log(`\nProcessing page ${page.pageInfo.num}`);
      
      // Sort content by y position (top to bottom) to process rows
      const sortedContent = [...page.content].sort((a, b) => a.y - b.y);
      
      // Process rows
      let currentY = -1;
      let currentRow: any[] = [];
      
      for (const item of sortedContent) {
        // Skip items that don't contain useful data (e.g., page numbers, disclaimers)
        if (item.str.includes('Page') || item.str.includes('Disclaimer')) {
          continue;
        }
        
        // Check if we've found the DETAILED STATEMENT header
        if (item.str.includes('DETAILED STATEMENT')) {
          console.log('Found DETAILED STATEMENT header');
          inTransactionTable = true;
          continue;
        }
        
        // If we're not in the transaction table yet, skip
        if (!inTransactionTable) {
          continue;
        }
        
        // Check if this is the column headers row
        if (!foundHeaders && 
            (item.str.includes('Receipt No') || 
             item.str.includes('Completion Time') || 
             item.str.includes('Transaction Status'))) {
          
          // Store the approximate x position for this column
          columnPositions[item.str.trim()] = item.x;
          
          // If we found multiple column headers, mark headers as found
          if (Object.keys(columnPositions).length >= 3) {
            foundHeaders = true;
            console.log('Found column headers:', columnPositions);
          }
          
          continue;
        }
        
        // If we haven't found headers yet, continue
        if (!foundHeaders) {
          continue;
        }
        
        // Check if this is a new row (different Y position)
        const yDiff = Math.abs(item.y - currentY);
        if (currentY === -1 || yDiff > 2) { // Allow small differences due to PDF formatting
          // Process previous row if it exists
          if (currentRow.length > 0) {
            processRow(currentRow, columnPositions, transactions);
            currentRow = [];
          }
          
          currentY = item.y;
        }
        
        // Add this item to the current row
        currentRow.push(item);
      }
      
      // Process the last row on the page
      if (currentRow.length > 0) {
        processRow(currentRow, columnPositions, transactions);
      }
    }
    
    // Sort transactions by date
    transactions.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    
    return transactions;
  } catch (error) {
    console.error('Error extracting transactions from PDF:', error);
    throw error;
  }
}

/**
 * Process a row of data to extract transaction details
 */
function processRow(row: any[], columnPositions: { [key: string]: number }, transactions: ParsedTransaction[]): void {
  try {
    // Sort items by x position (left to right)
    row.sort((a, b) => a.x - b.x);
    
    // Check if this row starts with a receipt number (10 alphanumeric characters)
    const firstItem = row[0];
    if (!firstItem || !firstItem.str.match(/^[A-Z0-9]{10}\s/)) {
      return;
    }
    
    console.log('Processing transaction row:', row.map(item => item.str).join(' | '));
    
    // Extract transaction data based on column positions and content
    const receiptNo = firstItem.str.trim();
    
    // Find date and time
    const dateTimeItem = row.find(item => item.str.match(/\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}/));
    if (!dateTimeItem) {
      console.log('Could not find date/time in row');
      return;
    }
    
    const dateTime = dateTimeItem.str.match(/(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2})/)[1];
    
    // Find status (COMPLETED or FAILED)
    const statusItem = row.find(item => item.str.includes('COMPLETED') || item.str.includes('FAILED'));
    if (!statusItem) {
      console.log('Could not find status in row');
      return;
    }
    
    const status = statusItem.str.includes('COMPLETED') ? 'COMPLETED' : 'FAILED';
    
    // Find amount values (Paid in and Withdrawn)
    // These are usually after the status
    const statusIndex = row.findIndex(item => item === statusItem);
    const amountItems = row.slice(statusIndex + 1);
    
    let paidIn = 0;
    let withdrawn = 0;
    
    if (amountItems.length >= 2) {
      // First amount is usually paid in, second is withdrawn
      paidIn = parseFloat(amountItems[0].str.replace(/,/g, '')) || 0;
      withdrawn = parseFloat(amountItems[1].str.replace(/,/g, '')) || 0;
    }
    
    // Description is everything between date and status
    const dateIndex = row.findIndex(item => item === dateTimeItem);
    const descItems = row.slice(dateIndex + 1, statusIndex);
    const description = descItems.map(item => item.str.trim()).join(' ');
    
    // Determine transaction type
    let type: 'income' | 'expense' | 'transfer' = 'transfer';
    if (paidIn > 0 && withdrawn === 0) {
      type = 'income';
    } else if (withdrawn > 0 && paidIn === 0) {
      type = 'expense';
    }
    
    // Extract merchant name from description
    let merchant = '';
    if (description.includes(' to ')) {
      merchant = description.split(' to ')[1].split(/\s+-|\s+Acc\.|\s+Account/)[0].trim();
    } else if (description.includes(' from ')) {
      merchant = description.split(' from ')[1].split(/\s+-|\s+via/)[0].trim();
    }
    
    // Refine transaction type based on description
    if (description.includes('Business Payment from')) {
      type = 'income';
    } else if (description.includes('Funds received from')) {
      type = 'income';
    } else if (description.includes('Pay Bill')) {
      type = 'expense';
    } else if (description.includes('Merchant Payment')) {
      type = 'expense';
    } else if (description.includes('Customer Transfer to')) {
      type = 'expense';
    } else if (description.includes('Customer Transfer of Funds Charge')) {
      type = 'expense';
    } else if (description.includes('OD Loan Repayment')) {
      type = 'expense';
    } else if (description.includes('Airtime Purchase')) {
      type = 'expense';
    }
    
    // Create transaction object
    const transaction: ParsedTransaction = {
      timestamp: new Date(dateTime),
      description,
      amount: withdrawn > 0 ? withdrawn : paidIn,
      type,
      merchant: merchant || undefined
    };
    
    console.log('Parsed transaction:', JSON.stringify(transaction, null, 2));
    transactions.push(transaction);
  } catch (error) {
    console.error('Error processing transaction row:', error);
  }
}

/**
 * Main function to process a PDF file and extract transactions
 */
export async function processMpesaPdf(pdfPath: string): Promise<ParsedTransaction[]> {
  try {
    // Check if file exists
    if (!fs.existsSync(pdfPath)) {
      throw new Error(`PDF file not found: ${pdfPath}`);
    }
    
    // Extract transactions
    const transactions = await extractMpesaTransactionsFromPDF(pdfPath);
    
    console.log(`\nExtracted ${transactions.length} transactions from PDF`);
    
    if (transactions.length > 0) {
      // Print some summary information
      const incomeTotal = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);
      
      const expenseTotal = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);
      
      console.log(`\nTotal Income: KES ${incomeTotal.toFixed(2)}`);
      console.log(`Total Expense: KES ${expenseTotal.toFixed(2)}`);
      console.log(`Net Balance: KES ${(incomeTotal - expenseTotal).toFixed(2)}`);
    }
    
    return transactions;
  } catch (error) {
    console.error('Error processing M-PESA PDF:', error);
    throw error;
  }
}