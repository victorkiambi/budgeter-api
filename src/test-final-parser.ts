import * as path from 'path';
import { parseMpesaStatement } from './mpesa-parser';

/**
 * Test script for the M-PESA parser
 */
async function testMpesaParser(): Promise<void> {
  try {
    console.log('Starting M-PESA parser test...');
    
    // Path to the M-PESA statement PDF
    const pdfPath = path.resolve('test/fixtures/bank-statements/M-PESA-sample.pdf');
    
    // Process the statement
    const transactions = await parseMpesaStatement(pdfPath);
    
    console.log(`\nParsed ${transactions.length} transactions successfully!`);
    
    // Write transactions to JSON file for inspection
    const fs = require('fs');
    const outputDir = path.resolve('exports');
    
    // Create exports directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const outputPath = path.join(outputDir, 'mpesa-transactions.json');
    fs.writeFileSync(outputPath, JSON.stringify(transactions, null, 2));
    
    console.log(`\nTransactions written to ${outputPath}`);
    
    // Display some sample transactions
    if (transactions.length > 0) {
      console.log('\nSample transactions:');
      
      // First transaction
      console.log('\nFirst transaction:');
      console.log(JSON.stringify(transactions[0], null, 2));
      
      // Middle transaction
      const midIndex = Math.floor(transactions.length / 2);
      console.log('\nMiddle transaction:');
      console.log(JSON.stringify(transactions[midIndex], null, 2));
      
      // Last transaction
      console.log('\nLast transaction:');
      console.log(JSON.stringify(transactions[transactions.length - 1], null, 2));
    }
  } catch (error) {
    console.error('Error testing M-PESA parser:', error);
  }
}

// Run the test
testMpesaParser();