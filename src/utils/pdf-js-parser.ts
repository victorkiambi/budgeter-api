import { PDFExtract } from 'pdf.js-extract';
import { ParsedTransaction } from '../types/statement.types';

/**
 * Parse M-PESA statement using pdf.js-extract (no Java dependency)
 */
export async function parseMpesaStatementWithPdfJs(pdfPath: string): Promise<ParsedTransaction[]> {
  try {
    console.log(`\n=== Processing M-PESA statement with pdf.js-extract: ${pdfPath} ===`);
    
    const pdfExtract = new PDFExtract();
    const result = await pdfExtract.extract(pdfPath, {});
    
    console.log(`Extracted ${result.pages.length} pages from the PDF`);
    
    const transactions: ParsedTransaction[] = [];
    
    // Process each page
    for (let i = 0; i < result.pages.length; i++) {
      const page = result.pages[i];
      console.log(`\nProcessing page ${i + 1} with ${page.content.length} content items`);
      
      // Group content by Y position (approximate rows)
      const rows: Record<number, any[]> = {};
      
      // Identify transaction rows by finding receipt numbers
      for (const item of page.content) {
        // Skip items with very low Y values (headers, page numbers)
        if (item.y < 50) continue;
        
        // Group by Y position, rounded to nearest integer to handle slight variations
        const yPos = Math.round(item.y);
        if (!rows[yPos]) {
          rows[yPos] = [];
        }
        rows[yPos].push(item);
      }
      
      // Sort rows by Y position
      const sortedYPositions = Object.keys(rows).map(Number).sort((a, b) => a - b);
      
      // Process each row
      for (const y of sortedYPositions) {
        const row = rows[y].sort((a, b) => a.x - b.x); // Sort by X position
        
        // Check if this looks like a transaction row (starts with receipt number)
        const firstItem = row[0];
        if (!firstItem || !firstItem.str.match(/^[A-Z0-9]{10}/)) {
          continue;
        }
        
        // Log the potential transaction row for debugging
        console.log('Potential transaction row:', row.map(item => item.str).join(' | '));
        
        try {
          // Extract receipt number
          const receiptNo = firstItem.str.trim().substring(0, 10);
          
          // Find date/time (in format YYYY-MM-DD HH:MM:SS)
          const dateTimeItem = row.find(item => 
            item.str.match(/\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}/)
          );
          
          if (!dateTimeItem) {
            console.log('No date/time found, skipping row');
            continue;
          }
          
          const dateTimeMatch = dateTimeItem.str.match(/(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2})/);
          if (!dateTimeMatch) {
            console.log('Invalid date/time format, skipping row');
            continue;
          }
          
          const dateTime = dateTimeMatch[1];
          
          // Find the transaction status
          const statusItem = row.find(item => 
            item.str.includes('COMPLETED') || item.str.includes('FAILED')
          );
          
          if (!statusItem) {
            console.log('No status found, skipping row');
            continue;
          }
          
          const status = statusItem.str.includes('COMPLETED') ? 'COMPLETED' : 'FAILED';
          
          // Identify columns for amounts
          // Typically, amounts appear after the status
          const statusIndex = row.indexOf(statusItem);
          const amountItems = row.slice(statusIndex + 1);
          
          let paidIn = 0;
          let withdrawn = 0;
          
          if (amountItems.length >= 2) {
            // Try to extract amounts (checking for number format)
            for (let j = 0; j < amountItems.length; j++) {
              const amountStr = amountItems[j].str.trim();
              if (amountStr.match(/^[\d,]+\.\d{2}$/)) {
                const amount = parseFloat(amountStr.replace(/,/g, ''));
                
                // First amount is typically "Paid in", second is "Withdrawn"
                if (j === 0) paidIn = amount;
                else if (j === 1) withdrawn = amount;
              }
            }
          }
          
          // Get description (items between date and status)
          const dateIndex = row.indexOf(dateTimeItem);
          const descItems = row.slice(dateIndex + 1, statusIndex);
          const description = descItems.map(item => item.str.trim()).join(' ');
          
          // Determine transaction type based on amounts
          let type: 'income' | 'expense' | 'transfer' = 'transfer';
          if (paidIn > 0 && withdrawn === 0) {
            type = 'income';
          } else if (withdrawn > 0 && paidIn === 0) {
            type = 'expense';
          }
          
          // Extract merchant name
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
          }
          
          // Create transaction object
          const transaction: ParsedTransaction = {
            timestamp: new Date(dateTime),
            amount: withdrawn > 0 ? withdrawn : paidIn,
            description,
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
    
    // Sort transactions by date
    transactions.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    
    console.log(`\nExtracted ${transactions.length} transactions from the PDF`);
    return transactions;
  } catch (error) {
    console.error('Error parsing M-PESA statement with pdf.js-extract:', error);
    throw error;
  }
}