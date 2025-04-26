import * as path from 'path';
import { parseMpesaStatementWithPdfJs } from './utils/pdf-js-parser';

async function testPdfJsParser() {
  try {
    console.log('Starting pdf.js-extract based M-PESA Parser test...');
    
    // Path to the test PDF file
    const pdfPath = path.resolve('test/fixtures/bank-statements/M-PESA-sample.pdf');
    
    // Process the PDF
    const transactions = await parseMpesaStatementWithPdfJs(pdfPath);
    
    console.log(`\nSuccessfully parsed ${transactions.length} transactions from M-PESA statement`);
    
    // Log first and last transactions
    if (transactions.length > 0) {
      console.log('\nFirst transaction:');
      console.log(JSON.stringify(transactions[0], null, 2));
      
      if (transactions.length > 1) {
        console.log('\nLast transaction:');
        console.log(JSON.stringify(transactions[transactions.length - 1], null, 2));
      }
      
      // Calculate totals
      const incomeTotal = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);
      
      const expenseTotal = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);
      
      console.log(`\nTotal Income: KES ${incomeTotal.toFixed(2)}`);
      console.log(`Total Expense: KES ${expenseTotal.toFixed(2)}`);
      console.log(`Net Balance: KES ${(incomeTotal - expenseTotal).toFixed(2)}`);
      
      // Group by categories
      const categories = transactions.reduce((acc, t) => {
        // Extract category from description
        let category = 'Other';
        
        if (t.description.includes('Pay Bill')) {
          category = 'Pay Bill';
        } else if (t.description.includes('Customer Transfer')) {
          if (t.description.includes('Charge')) {
            category = 'Transfer Charges';
          } else {
            category = 'Customer Transfer';
          }
        } else if (t.description.includes('Merchant Payment')) {
          category = 'Merchant Payment';
        } else if (t.description.includes('Business Payment')) {
          category = 'Business Payment';
        } else if (t.description.includes('Funds received')) {
          category = 'Funds Received';
        }
        
        if (!acc[category]) {
          acc[category] = {
            count: 0,
            total: 0
          };
        }
        
        acc[category].count++;
        acc[category].total += t.amount;
        
        return acc;
      }, {} as Record<string, { count: number; total: number }>);
      
      console.log('\nTransaction Categories:');
      Object.entries(categories)
        .sort((a, b) => b[1].total - a[1].total)
        .forEach(([category, data]) => {
          console.log(`${category}: ${data.count} transactions, KES ${data.total.toFixed(2)}`);
        });
    } else {
      console.log('No transactions found in the statement!');
    }
    
  } catch (error) {
    console.error('Error testing pdf.js-extract based M-PESA Parser:', error);
  }
}

// Run the test
testPdfJsParser();