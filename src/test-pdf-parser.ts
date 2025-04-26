import { processPDFFile } from './utils/pdf-parser';
import * as fs from 'fs';
import * as path from 'path';

async function testPDFParser() {
    try {
        console.log('Starting PDF processing test...');
        
        // Specify 'mpesa' as the bank template to use
        const transactions = await processPDFFile(
            fs.readFileSync(path.resolve('test/fixtures/bank-statements/M-PESA-sample.pdf')), 
            'mpesa'
        );
        
        console.log('\nProcessed Transactions:');
        console.log(JSON.stringify(transactions, null, 2));
        console.log(`\nTotal transactions found: ${transactions.length}`);
    } catch (error) {
        console.error('Error processing PDF:', error);
    }
}

testPDFParser();