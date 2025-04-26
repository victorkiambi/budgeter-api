import { parseMpesaStatement } from './mpesa-parser';
import { ParsedTransaction } from './types/statement.types';

/**
 * Example of how to integrate the M-PESA parser with the budgeter application
 * 
 * This shows how you can use the improved M-PESA parser in your
 * transaction processing workflow.
 */

/**
 * Process an uploaded M-PESA statement
 * 
 * @param filePath Path to the uploaded PDF file
 * @param accountId The account ID to associate transactions with
 * @returns The processed transactions
 */
export async function processUploadedMpesaStatement(
  filePath: string,
  accountId: string
): Promise<ParsedTransaction[]> {
  try {
    // Parse the M-PESA statement
    console.log(`Processing M-PESA statement for account ${accountId}`);
    const transactions = await parseMpesaStatement(filePath);
    
    // Associate transactions with account ID
    const processedTransactions = transactions.map(transaction => ({
      ...transaction,
      accountId
    }));
    
    // Here you could save the transactions to the database
    // Example (pseudocode):
    // await saveTransactionsToDatabase(processedTransactions);
    
    return processedTransactions;
  } catch (error) {
    console.error('Error processing M-PESA statement:', error);
    throw error;
  }
}

/**
 * Example of how this would be used in an API route or controller
 */
export async function handleMpesaStatementUpload(req: any, res: any): Promise<void> {
  try {
    const { accountId } = req.body;
    const filePath = req.file.path; // Assuming file was uploaded and saved with multer
    
    // Process the statement
    const transactions = await processUploadedMpesaStatement(filePath, accountId);
    
    // Send response
    res.status(200).json({
      success: true,
      message: `Successfully processed ${transactions.length} transactions`,
      transactionCount: transactions.length
    });
  } catch (error) {
    console.error('Error handling M-PESA statement upload:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process M-PESA statement',
      error: error.message
    });
  }
}

/**
 * Example of scheduled job to update transactions
 */
export async function scheduledTransactionUpdate(): Promise<void> {
  try {
    console.log('Running scheduled transaction update...');
    
    // Get all accounts with M-PESA statements that need processing
    // (pseudocode)
    // const pendingStatements = await getPendingMpesaStatements();
    
    // Process each statement
    // for (const statement of pendingStatements) {
    //   await processUploadedMpesaStatement(statement.filePath, statement.accountId);
    //   await markStatementAsProcessed(statement.id);
    // }
    
    console.log('Scheduled transaction update completed successfully');
  } catch (error) {
    console.error('Error in scheduled transaction update:', error);
  }
}