import * as path from 'path';
import { processMpesaPdf } from './utils/pdf-table-parser';

async function testMpesaPdfParser() {
  try {
    console.log('Starting M-PESA PDF Parser test...');
    
    // Path to the test PDF file
    const pdfPath = path.resolve('test/fixtures/bank-statements/M-PESA-sample.pdf');
    
    // Process the PDF
    const transactions = await processMpesaPdf(pdfPath);
    
    console.log(`\nSuccessfully parsed ${transactions.length} transactions from M-PESA statement`);
    
    // Log first and last transactions
    if (transactions.length > 0) {
      console.log('\nFirst transaction:');
      console.log(JSON.stringify(transactions[0], null, 2));
      
      if (transactions.length > 1) {
        console.log('\nLast transaction:');
        console.log(JSON.stringify(transactions[transactions.length - 1], null, 2));
      }
      
      // Group by transaction type
      const typeGroups = transactions.reduce((acc, t) => {
        acc[t.type] = (acc[t.type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      
      console.log('\nTransaction types:');
      console.log(typeGroups);
      
      // Group by merchant (top 5)
      const merchantCounts = transactions.reduce((acc, t) => {
        if (t.merchant) {
          acc[t.merchant] = (acc[t.merchant] || 0) + 1;
        }
        return acc;
      }, {} as Record<string, number>);
      
      const topMerchants = Object.entries(merchantCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
      
      console.log('\nTop 5 merchants:');
      topMerchants.forEach(([merchant, count], i) => {
        console.log(`${i + 1}. ${merchant}: ${count} transactions`);
      });
    } else {
      console.log('No transactions found in the statement!');
    }
    
  } catch (error) {
    console.error('Error testing M-PESA PDF Parser:', error);
  }
}

// Run the test
testMpesaPdfParser();