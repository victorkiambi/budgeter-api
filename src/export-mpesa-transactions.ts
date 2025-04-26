import { processPDFFile } from './utils/pdf-parser';
import * as fs from 'fs';
import * as path from 'path';

async function exportMpesaTransactions() {
  try {
    console.log('Starting M-PESA transaction export...');
    
    // Read the M-PESA PDF file
    const pdfPath = path.resolve('test/fixtures/bank-statements/M-PESA-sample.pdf');
    const transactions = await processPDFFile(fs.readFileSync(pdfPath), 'mpesa');
    
    console.log(`\nExporting ${transactions.length} transactions from M-PESA statement to CSV`);
    
    // Create CSV header
    const csvHeader = [
      'Date', 
      'Time', 
      'Reference', 
      'Description', 
      'Merchant',
      'Type',
      'Amount',
      'Status'
    ].join(',');
    
    // Convert transactions to CSV rows
    const csvRows = transactions.map(transaction => {
      const date = transaction.timestamp.toISOString().split('T')[0]; // YYYY-MM-DD
      const time = transaction.timestamp.toISOString().split('T')[1].substring(0, 8); // HH:MM:SS
      
      return [
        date,
        time,
        transaction.reference || '',
        `"${transaction.description.replace(/"/g, '""')}"`, // Handle quotes in descriptions
        `"${transaction.merchant || ''}"`,
        transaction.type,
        transaction.amount.toFixed(2),
        transaction.status
      ].join(',');
    });
    
    // Combine header and rows
    const csvContent = [csvHeader, ...csvRows].join('\n');
    
    // Write to file
    const outputPath = path.resolve('exports/mpesa-transactions.csv');
    
    // Ensure exports directory exists
    const exportsDir = path.resolve('exports');
    if (!fs.existsSync(exportsDir)) {
      fs.mkdirSync(exportsDir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, csvContent);
    
    console.log(`\nExport complete. File saved to: ${outputPath}`);
    
    // Also create a summary CSV for categories
    const categorySummary: Record<string, { count: number, total: number }> = {};
    
    transactions.forEach(transaction => {
      // Extract the transaction category from the description
      let category = 'Other';
      
      if (transaction.description.includes('Pay Bill')) {
        category = 'Pay Bill';
      } else if (transaction.description.includes('Customer Transfer')) {
        if (transaction.description.includes('Charge')) {
          category = 'Transfer Charges';
        } else {
          category = 'Customer Transfer';
        }
      } else if (transaction.description.includes('Merchant Payment')) {
        category = 'Merchant Payment';
      } else if (transaction.description.includes('Business Payment')) {
        category = 'Business Payment';
      } else if (transaction.description.includes('Airtime')) {
        category = 'Airtime Purchase';
      } else if (transaction.description.includes('OD Loan')) {
        category = 'Loan Repayment';
      } else if (transaction.description.includes('Funds received')) {
        category = 'Funds Received';
      }
      
      if (!categorySummary[category]) {
        categorySummary[category] = { count: 0, total: 0 };
      }
      
      categorySummary[category].count += 1;
      categorySummary[category].total += transaction.amount;
    });
    
    // Create category summary CSV
    const categoryCsvHeader = ['Category', 'Count', 'Total Amount'].join(',');
    const categoryCsvRows = Object.entries(categorySummary)
      .sort((a, b) => b[1].total - a[1].total)
      .map(([category, data]) => {
        return [
          `"${category}"`,
          data.count,
          data.total.toFixed(2)
        ].join(',');
      });
    
    const categoryCsvContent = [categoryCsvHeader, ...categoryCsvRows].join('\n');
    const categoryOutputPath = path.resolve('exports/mpesa-categories.csv');
    fs.writeFileSync(categoryOutputPath, categoryCsvContent);
    
    console.log(`Category summary saved to: ${categoryOutputPath}`);
    
  } catch (error) {
    console.error('Error exporting M-PESA transactions:', error);
  }
}

// Run the export
exportMpesaTransactions();