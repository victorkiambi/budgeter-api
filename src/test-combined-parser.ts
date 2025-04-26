import * as fs from 'fs';
import * as path from 'path';
import { processPDFFile } from './utils/pdf-parser';
import { processMpesaPdf } from './utils/pdf-table-parser';
import { ParsedTransaction } from './types/statement.types';

/**
 * Combined parser that tries different parsing approaches and uses the best one
 */
async function parseMpesaStatement(pdfPath: string): Promise<ParsedTransaction[]> {
  console.log(`\n=== Parsing M-PESA statement: ${pdfPath} ===`);
  
  try {
    // First try the table-based parser (likely more accurate for structured statements)
    console.log('\nAttempting to parse with table-based parser...');
    const tableBasedResults = await processMpesaPdf(pdfPath);
    
    if (tableBasedResults.length > 0) {
      console.log(`Table-based parser found ${tableBasedResults.length} transactions!`);
      return tableBasedResults;
    }
    
    console.log('Table-based parser found no transactions, trying traditional parser...');
    
    // If table-based parser didn't find any transactions, try the traditional parser
    const buffer = fs.readFileSync(pdfPath);
    const traditionalResults = await processPDFFile(buffer, 'mpesa');
    
    console.log(`Traditional parser found ${traditionalResults.length} transactions.`);
    return traditionalResults;
  } catch (error) {
    console.error('Error parsing M-PESA statement:', error);
    
    // As a fallback, if table parser throws error, try traditional parser
    try {
      console.log('Error with table parser, trying traditional parser as fallback...');
      const buffer = fs.readFileSync(pdfPath);
      return await processPDFFile(buffer, 'mpesa');
    } catch (fallbackError) {
      console.error('Both parsers failed:', fallbackError);
      return [];
    }
  }
}

async function testCombinedParser() {
  try {
    const pdfPath = path.resolve('test/fixtures/bank-statements/M-PESA-sample.pdf');
    const transactions = await parseMpesaStatement(pdfPath);
    
    console.log(`\nCombined parser extracted ${transactions.length} transactions`);
    
    if (transactions.length > 0) {
      console.log('\nFirst transaction:');
      console.log(JSON.stringify(transactions[0], null, 2));
      
      console.log('\nLast transaction:');
      console.log(JSON.stringify(transactions[transactions.length - 1], null, 2));
      
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
    } else {
      console.log('No transactions found!');
    }
  } catch (error) {
    console.error('Error testing combined parser:', error);
  }
}

// Run the test
testCombinedParser();