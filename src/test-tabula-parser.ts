import * as path from 'path';
import { parseMpesaStatementWithTabula } from './utils/tabula-parser';

async function testTabulaParser() {
  try {
    console.log('Starting Tabula-based M-PESA Parser test...');
    
    // Path to the test PDF file
    const pdfPath = path.resolve('test/fixtures/bank-statements/M-PESA-sample.pdf');
    
    // Process the PDF
    const transactions = await parseMpesaStatementWithTabula(pdfPath);
    
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
      
      // Group by type
      const typeGroups = transactions.reduce((acc, t) => {
        acc[t.type] = (acc[t.type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      
      console.log('\nTransaction types:');
      console.log(typeGroups);
    } else {
      console.log('No transactions found in the statement!');
    }
    
  } catch (error) {
    console.error('Error testing Tabula-based M-PESA Parser:', error);
  }
}

// Run the test
testTabulaParser();