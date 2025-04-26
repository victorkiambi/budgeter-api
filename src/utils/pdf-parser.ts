import { PDFData } from 'pdf-parse';
import { BankStatementTemplate, ParsedTransaction } from '../types/statement.types';

export const bankTemplates: Record<string, BankStatementTemplate> = {
  'standard-bank': {
    bankId: 'standard-bank',
    name: 'Standard Bank',
    dateFormats: ['DD/MM/YYYY', 'YYYY-MM-DD'],
    patterns: {
      transaction: /^(\d{2}\/\d{2}\/\d{4})\s+(.+?)\s+([\d,]+\.\d{2})\s+([A-Z]+)/,
      transactionType: /(?:POS|ATM|TRF|DEP)/i,
      amount: /([\d,]+\.\d{2})/,
      status: /(?:COMPLETED|PENDING|FAILED)/i,
      time: /(\d{2}:\d{2}(?::\d{2})?)/,
      reference: /REF:\s*([A-Z0-9]+)/i
    },
    multilineTransaction: false,
    currency: 'KES',
    datePosition: 'start',
    amountPosition: 'end',
    transactionTypes: {
      'POS': 'expense',
      'ATM': 'expense',
      'TRF': 'transfer',
      'DEP': 'income'
    },
    headerIdentifier: /STATEMENT OF ACCOUNT/i,
    footerIdentifier: /END OF STATEMENT/i,
    receiptPattern: /RECEIPT NO:\s*([A-Z0-9]+)/i,
    dateTimePattern: /(\d{2}\/\d{2}\/\d{4}\s+\d{2}:\d{2}(?::\d{2})?)/,
    amountPattern: /([\d,]+\.\d{2})/,
    descriptionPattern: /(?:POS|ATM|TRF|DEP)\s+(.+?)(?=\s+[\d,]+\.\d{2})/i,
    referencePattern: /REF:\s*([A-Z0-9]+)/i,
    statusPattern: /(?:COMPLETED|PENDING|FAILED)/i
  },
  'kcb-bank': {
    bankId: 'kcb-bank',
    name: 'KCB Bank',
    dateFormats: ['YYYY-MM-DD', 'DD-MM-YYYY'],
    patterns: {
      transaction: /^(\d{4}-\d{2}-\d{2})\s+(.+?)\s+([\d,]+\.\d{2})\s+([A-Z]+)/,
      transactionType: /(?:PURCHASE|WITHDRAWAL|TRANSFER|DEPOSIT)/i,
      amount: /([\d,]+\.\d{2})/,
      status: /(?:SUCCESS|PENDING|FAILED)/i,
      time: /(\d{2}:\d{2}(?::\d{2})?)/,
      reference: /TXN ID:\s*([A-Z0-9]+)/i
    },
    multilineTransaction: false,
    currency: 'KES',
    datePosition: 'start',
    amountPosition: 'end',
    transactionTypes: {
      'PURCHASE': 'expense',
      'WITHDRAWAL': 'expense',
      'TRANSFER': 'transfer',
      'DEPOSIT': 'income'
    },
    headerIdentifier: /KCB BANK STATEMENT/i,
    footerIdentifier: /STATEMENT END/i,
    receiptPattern: /TXN ID:\s*([A-Z0-9]+)/i,
    dateTimePattern: /(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}(?::\d{2})?)/,
    amountPattern: /([\d,]+\.\d{2})/,
    descriptionPattern: /(?:PURCHASE|WITHDRAWAL|TRANSFER|DEPOSIT)\s+(.+?)(?=\s+[\d,]+\.\d{2})/i,
    referencePattern: /TXN ID:\s*([A-Z0-9]+)/i,
    statusPattern: /(?:SUCCESS|PENDING|FAILED)/i
  },
  'mpesa': {
    bankId: 'mpesa',
    name: 'M-PESA',
    dateFormats: ['YYYY-MM-DD HH:mm:ss'],
    columnHeaders: [
      'Receipt No', 
      'Completion Time', 
      'Details', 
      'Transaction Status', 
      'Paid in', 
      'Withdrawn', 
      'Balance'
    ],
    patterns: {
      transaction: /^([A-Z0-9]{10})\s+(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2})\s+(.+?)\s+(COMPLETED|FAILED)/i,
      transactionType: /(?:Pay Bill|Send Money|Business Payment|Customer Transfer|Merchant Payment|Airtime Purchase|OD Loan|OverDraft|Fuliza)/i,
      time: /(\d{2}:\d{2}:\d{2})/,
      receipt: /^([A-Z0-9]{10})/,
      datetime: /(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2})/,
      status: /(?:COMPLETED|FAILED)/i,
      amount: /(\d+(?:,\d{3})*(?:\.\d{2})?)/,
      reference: /([A-Z0-9]{10})/,
      merchant: /(?:to|from)\s+([A-Z0-9\s&.-]+?)(?:\s+(?:Acc\.|Account|Till|For|Reference|-)|\s*$)/i
    },
    multilineTransaction: false,  // Changed to false since we're handling tabular data
    currency: 'KES',
    datePosition: 'start',
    amountPosition: 'middle',
    transactionTypes: {
      'Pay Bill': 'expense',
      'Customer Transfer': 'expense',
      'Business Payment': 'income',
      'OD Loan': 'expense',
      'OverDraft': 'expense',
      'Fuliza': 'expense',
      'Send Money': 'expense',
      'B2C Payment': 'income',
      'Customer Merchant Payment': 'expense'
    },
    headerIdentifier: /DETAILED STATEMENT/i,
    footerIdentifier: /Disclaimer: This record is produced for your personal use/i,
    receiptPattern: /([A-Z0-9]{10})/,
    dateTimePattern: /(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2})/,
    amountPattern: /(\d+(?:,\d{3})*(?:\.\d{2})?)/,
    descriptionPattern: /Details\s+(.+?)(?=\s+(?:COMPLETED|FAILED))/i,
    referencePattern: /([A-Z0-9]{10})/,
    statusPattern: /(?:COMPLETED|FAILED)/i
  }
};

export async function processPDFFile(buffer: Buffer, bankId: string): Promise<ParsedTransaction[]> {
  const template = bankTemplates[bankId];
  if (!template) {
    throw new Error(`Unsupported bank template: ${bankId}`);
  }

  try {
    console.log(`\n=== Processing ${bankId} statement ===`);
    console.log('Buffer size:', buffer.length, 'bytes');
    console.log('Buffer valid:', buffer.length > 0);
    
    // Import pdf-parse using import syntax for better error handling
    const pdfParse = await import('pdf-parse');
    
    // Configure PDF parser options for better extraction
    const options = {
      // Ensure we get all text content including hidden text
      normalizeWhitespace: true,
      disableCombineTextItems: false,
      // Custom render function to properly extract text
      pagerender: function(pageData: any) {
        return pageData.getTextContent().then(function(textContent: any) {
          let lastY, text = '';
          for (const item of textContent.items) {
            if (lastY == item.transform[5] || !lastY){
              text += item.str;
            } else {
              text += '\n' + item.str;
            }
            lastY = item.transform[5];
          }
          return text;
        });
      }
    };
    
    console.log('Starting PDF parsing...');
    const data: PDFData = await pdfParse.default(buffer, options);
    
    // Clean up the extracted text
    const cleanText = data.text
      .replace(/\[object Object\]/g, '') // Remove object notation
      .replace(/\r\n/g, '\n')           // Normalize line endings
      .replace(/\s+\n/g, '\n')          // Remove trailing spaces
      .replace(/\n\s+/g, '\n')          // Remove leading spaces
      .replace(/\n+/g, '\n')            // Remove multiple newlines
      .trim();                          // Trim start/end whitespace
    
    console.log('\n=== PDF Parsing Results ===');
    console.log('PDF Version:', data.info.PDFFormatVersion);
    console.log('Total Pages:', data.numpages);
    console.log('Text Length:', cleanText.length);
    
    if (cleanText.length === 0) {
      console.error('No text extracted from PDF!');
      console.log('PDF Info:', data.info);
      throw new Error('PDF parsing resulted in empty text');
    }
    
    // Log the first 500 characters to see the structure
    console.log('\nFirst 500 characters of content:');
    console.log('---START OF CONTENT---');
    console.log(cleanText.substring(0, 500));
    console.log('---END OF CONTENT---');
    
    // Split into lines and show first few lines
    const lines = cleanText.split('\n').filter(line => line.trim());
    console.log('\nFirst 10 lines:');
    lines.slice(0, 10).forEach((line, i) => {
      console.log(`Line ${i + 1}: ${line}`);
    });
    
    let transactions: ParsedTransaction[];
    
    // Choose extraction method based on bank type
    if (bankId === 'mpesa') {
      console.log('\nUsing M-PESA specific extraction...');
      transactions = extractMpesaTransactions(cleanText, template);
      
      console.log(`\nExtracted ${transactions.length} transactions`);
      if (transactions.length === 0) {
        // Log potential issues
        console.log('\nDiagnostic Information:');
        console.log('1. Checking for header marker...');
        if (cleanText.includes('MPESA STATEMENT')) {
          console.log('✓ Found MPESA STATEMENT header');
        } else {
          console.log('✗ MPESA STATEMENT header not found');
          // Try alternative header formats
          console.log('Checking alternative headers:');
          ['M-PESA STATEMENT', 'M-PESA', 'SAFARICOM'].forEach(header => {
            if (cleanText.includes(header)) {
              console.log(`Found alternative header: ${header}`);
            }
          });
        }
        
        console.log('\n2. Checking for column headers...');
        const hasReceiptNo = cleanText.includes('Receipt No');
        const hasCompletionTime = cleanText.includes('Completion Time');
        const hasDetails = cleanText.includes('Details');
        const hasStatus = cleanText.includes('Transaction Status');
        
        console.log('Receipt No:', hasReceiptNo ? '✓' : '✗');
        console.log('Completion Time:', hasCompletionTime ? '✓' : '✗');
        console.log('Details:', hasDetails ? '✓' : '✗');
        console.log('Transaction Status:', hasStatus ? '✓' : '✗');
        
        // Log all unique lines for debugging
        console.log('\nAll unique lines in document:');
        const uniqueLines = new Set(lines);
        console.log([...uniqueLines].join('\n'));
        
        console.log('\n3. Checking for transaction patterns...');
        // Look for typical M-PESA transaction patterns
        const receiptPattern = /[A-Z0-9]{10}/;
        const datePattern = /\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}/;
        
        const hasReceipts = receiptPattern.test(cleanText);
        const hasDates = datePattern.test(cleanText);
        
        console.log('Receipt Numbers:', hasReceipts ? '✓' : '✗');
        console.log('Dates:', hasDates ? '✓' : '✗');
        
        // Try to find any potential transaction lines
        const potentialTransactions = lines.filter(line => 
          receiptPattern.test(line) && datePattern.test(line)
        );
        
        console.log('\nFound', potentialTransactions.length, 'potential transaction lines');
        if (potentialTransactions.length > 0) {
          console.log('Sample transaction lines:');
          potentialTransactions.slice(0, 3).forEach((line, i) => {
            console.log(`${i + 1}:`, line);
          });
        }
      }
      
      // Post-process transactions
      transactions = transactions.map(transaction => {
        if (transaction.merchant) {
          transaction.merchant = transaction.merchant.replace(/\s+\d+$/, '').trim();
        }
        return transaction;
      });
      
      // Sort transactions by timestamp
      transactions.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    } else {
      transactions = extractTransactions(cleanText, template);
    }
    
    return transactions;
  } catch (error) {
    console.error('Error processing PDF:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      console.error('Stack trace:', error.stack);
    }
    throw error;
  }
}

function extractMpesaTransactions(text: string, template: BankStatementTemplate): ParsedTransaction[] {
  console.log('\n=== Processing M-PESA Statement ===');
  
  // Split the text into lines and clean them
  const lines = text.split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);
  
  console.log(`Found ${lines.length} non-empty lines`);
  
  // Find transaction lines
  const receiptPattern = /[A-Z0-9]{10}/;
  const datePattern = /\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}/;
  
  const transactionLines = lines.filter(line => 
    receiptPattern.test(line) && datePattern.test(line)
  );
  
  console.log(`Found ${transactionLines.length} transaction lines`);
  
  // Process each transaction line
  const transactions: ParsedTransaction[] = [];
  let processedCount = 0;
  let errorCount = 0;
  
  for (const line of transactionLines) {
    try {
      const transaction = parseMpesaTransactionRow(line);
      if (transaction) {
        transactions.push(transaction);
        processedCount++;
        
        // Log progress every 100 transactions
        if (processedCount % 100 === 0) {
          console.log(`Processed ${processedCount} transactions...`);
        }
      }
    } catch (error) {
      errorCount++;
      console.error(`Error processing transaction line: ${line.substring(0, 50)}...`);
      if (error instanceof Error) {
        console.error(`Error details: ${error.message}`);
      }
    }
  }
  
  console.log(`\nTransaction Processing Summary:`);
  console.log(`- Total lines found: ${transactionLines.length}`);
  console.log(`- Successfully processed: ${processedCount}`);
  console.log(`- Errors: ${errorCount}`);
  
  if (transactions.length > 0) {
    console.log('\nSample Transactions:');
    transactions.slice(0, 3).forEach((t, i) => {
      console.log(`\nTransaction ${i + 1}:`);
      console.log(`- Receipt: ${t.reference}`);
      console.log(`- Date: ${t.timestamp.toISOString()}`);
      console.log(`- Amount: ${t.amount}`);
      console.log(`- Type: ${t.type}`);
      console.log(`- Status: ${t.status}`);
      console.log(`- Description: ${t.description}`);
      console.log(`- Merchant: ${t.merchant}`);
    });
  }
  
  return transactions;
}

export function parseMpesaTransactionRow(line: string): ParsedTransaction | null {
  // Normalize spaces in the line first
  line = line
    // Add space between receipt and date
    .replace(/([A-Z0-9]{10})(\d{4}-\d{2}-\d{2})/, '$1 $2')
    // Add space between time and details
    .replace(/(\d{2}:\d{2}:\d{2})([A-Za-z])/, '$1 $2')
    // Add space before status
    .replace(/(Send Money|Transfer|Payment)(\s*)(COMPLETED|FAILED|PENDING)/i, '$1 $3')
    // Add space after Fuliza/Send Money/Transfer
    .replace(/(Fuliza|Send Money|Transfer)([A-Z])/g, '$1 $2')
    // Normalize multiple spaces
    .replace(/\s+/g, ' ')
    .trim();
    
  // Extract receipt number (10 characters)
  const receiptMatch = line.match(/([A-Z0-9]{10})/);
  if (!receiptMatch) {
    throw new Error('No receipt number found');
  }
  const receiptNo = receiptMatch[1];
  
  // Extract completion time
  const dateTimeMatch = line.match(/(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2})/);
  if (!dateTimeMatch) {
    throw new Error('No completion time found');
  }
  const completionTime = dateTimeMatch[1];
  
  // Extract transaction status - handle both immediate and charge transaction formats
  const statusMatch = line.match(/(?:COMPLETED|FAILED|PENDING)(?:\s|$)/i) || 
                     line.match(/(?:Send Money|Transfer|Payment)\s+(?:COMPLETED|FAILED|PENDING)/i);
  if (!statusMatch) {
    console.log('Debug - Line content:', line);
    throw new Error('No transaction status found');
  }
  const status = statusMatch[0].match(/(COMPLETED|FAILED|PENDING)/i)![1].toUpperCase();
  
  // Extract amounts (Paid in and Withdrawn)
  const amounts = line.match(/(\d+(?:,\d{3})*(?:\.\d{2})?)/g);
  if (!amounts || amounts.length < 2) {
    throw new Error('No amounts found');
  }
  
  // Parse amounts - M-PESA statements show both Paid in (income) and Withdrawn (expense)
  const paidIn = parseFloat(amounts[amounts.length - 3]?.replace(/,/g, '') || '0');
  const withdrawn = parseFloat(amounts[amounts.length - 2]?.replace(/,/g, '') || '0');
  
  // Extract details (between completion time and status)
  const detailsStart = line.indexOf(completionTime) + completionTime.length;
  const detailsEnd = line.indexOf(statusMatch[0]);
  
  if (detailsStart >= detailsEnd) {
    throw new Error('Invalid details position');
  }
  
  const details = line.substring(detailsStart, detailsEnd).trim();
  if (!details) {
    throw new Error('No transaction details found');
  }
  
  // Determine transaction type based on Paid in and Withdrawn amounts
  let type: 'expense' | 'income' | 'transfer';
  let amount: number;
  
  if (paidIn > 0 && withdrawn === 0) {
    type = 'income';
    amount = paidIn;
  } else if (withdrawn > 0 && paidIn === 0) {
    type = 'expense';
    amount = withdrawn;
  } else {
    // Handle edge case where both might have values
    type = withdrawn > paidIn ? 'expense' : 'income';
    amount = withdrawn > paidIn ? withdrawn : paidIn;
  }
  
  // Extract merchant from details using M-PESA specific patterns
  let merchant = '';
  const merchantPatterns = [
    // Customer Transfer pattern (phone number format)
    /(?:Customer )?(?:Transfer|Send Money) to \d+\*+\d+ - (.+?)(?:\s+(?:Acc\.|Account|via|$))/i,
    
    // Merchant Payment pattern (till number format)
    /Merchant Payment (?:Online )?to \d+ - (.+?)(?:\s+(?:Till|Branch|Acc\.|Account|via|$))/i,
    
    // Pay Bill pattern (paybill number format)
    /Pay Bill (?:Online )?to \d+ - (.+?)(?:\s+(?:Acc\.|Account|for|$))/i,
    
    // Business Payment pattern
    /Business Payment from \d+ - (.+?)(?:\s+(?:via|$))/i,
    
    // Funds received pattern
    /(?:Funds|Money) received from \d+\*+\d+ - (.+?)(?:\s+(?:via|$))/i
  ];

  // Try each pattern until we find a match
  for (const pattern of merchantPatterns) {
    const match = details.match(pattern);
    if (match && match[1]) {
      merchant = match[1].trim();
      break;
    }
  }

  // If no pattern matched but we have a dash separator, try extracting after the last dash
  if (!merchant && details.includes(' - ')) {
    const parts = details.split(' - ');
    merchant = parts[parts.length - 1].trim();
  }
  
  // Clean up merchant name
  if (merchant) {
    merchant = merchant
      .replace(/\s+\d+$/, '')        // Remove trailing numbers
      .replace(/\s*-\s*$/, '')       // Remove trailing dash
      .replace(/\s+(?:via|for)\s+.*$/, '')  // Remove via/for clauses
      .trim();
  }
  
  // Create transaction object
  const transaction: ParsedTransaction = {
    timestamp: new Date(completionTime),
    amount,
    description: details,
    type,
    merchant: merchant || undefined,
    reference: receiptNo,
    status
  };
  
  return transaction;
}

function extractTransactions(text: string, template: BankStatementTemplate): ParsedTransaction[] {
  const lines = text.split('\n').filter(line => line.trim());
  console.log(`\n=== Processing ${lines.length} lines ===`);
  
  const transactions: ParsedTransaction[] = [];
  let isInTransactionSection = false;
  let currentTransaction: string[] = [];
  let skipNextLine = false;
  let lineNumber = 0;

  console.log('\nSearching for transaction section...');
  console.log('Header pattern:', template.headerIdentifier);
  console.log('Footer pattern:', template.footerIdentifier);

  for (let i = 0; i < lines.length; i++) {
    lineNumber++;
    const line = lines[i].trim();
    
    if (skipNextLine) {
      console.log(`Line ${lineNumber}: Skipping line due to previous processing`);
      skipNextLine = false;
      continue;
    }

    console.log(`\nLine ${lineNumber}: ${line}`);
    
    // Check if we're entering the transaction section
    if (template.headerIdentifier?.test(line)) {
      console.log(`Line ${lineNumber}: Found transaction section header`);
      isInTransactionSection = true;
      continue;
    }

    // Check if we're leaving the transaction section
    if (template.footerIdentifier?.test(line)) {
      console.log(`Line ${lineNumber}: Found transaction section footer`);
      isInTransactionSection = false;
      
      if (currentTransaction.length > 0) {
        console.log('Processing final transaction in section');
        processTransaction(currentTransaction, template, transactions);
        currentTransaction = [];
      }
      continue;
    }

    if (!isInTransactionSection) {
      console.log(`Line ${lineNumber}: Outside transaction section - skipping`);
      continue;
    }

    // Handle transaction lines
    if (template.patterns.transaction.test(line)) {
      console.log(`Line ${lineNumber}: Found new transaction start: ${line}`);
      
      if (currentTransaction.length > 0) {
        console.log('Processing previous transaction before starting new one');
        processTransaction(currentTransaction, template, transactions);
      }
      
      currentTransaction = [line];
      
      if (template.multilineTransaction && i + 1 < lines.length) {
        // For multi-line transactions, look ahead for continuation lines
        const nextLine = lines[i + 1].trim();
        if (!template.patterns.transaction.test(nextLine) && !nextLine.match(/Page \d+ of \d+/)) {
          console.log('Adding continuation line to transaction');
          currentTransaction.push(nextLine);
          skipNextLine = true;
        }
      }
    }
  }

  // Process last transaction if exists
  if (currentTransaction.length > 0) {
    console.log('\nProcessing final transaction');
    processTransaction(currentTransaction, template, transactions);
  }

  return transactions;
}

export function processTransaction(lines: string[], template: BankStatementTemplate, transactions: ParsedTransaction[]): void {
  console.log('\n=== Processing Transaction ===');
  const combinedText = lines.join(' ');
  console.log('Combined lines:', combinedText);

  // Match the transaction pattern
  const transactionMatch = lines[0].match(template.patterns.transaction);
  if (!transactionMatch) {
    console.log('No transaction match found');
    return;
  }

  let timestamp: Date | null = null;
  let amount: number | null = null;
  let description: string = '';
  let status: string = '';
  let reference: string = '';
  
  // Extract date/time
  const datetimeMatch = combinedText.match(template.dateTimePattern || template.patterns.time);
  if (datetimeMatch) {
    try {
      timestamp = new Date(datetimeMatch[1]);
    } catch (e) {
      console.log('Error parsing datetime:', e);
    }
  }

  // Extract amount
  const amountMatch = combinedText.match(template.amountPattern || template.patterns.amount);
  if (amountMatch) {
    amount = parseFloat(amountMatch[1].replace(/,/g, ''));
  }

  // Extract description
  const descriptionMatch = combinedText.match(template.descriptionPattern || /([^\d]+)/);
  if (descriptionMatch) {
    description = descriptionMatch[1].trim();
  }

  // Extract status
  const statusMatch = combinedText.match(template.statusPattern || template.patterns.status);
  if (statusMatch) {
    status = statusMatch[0];
  }

  // Extract reference
  const referenceMatch = combinedText.match(template.referencePattern || template.patterns.reference);
  if (referenceMatch) {
    reference = referenceMatch[1];
  }

  // Determine transaction type
  const type = determineTransactionType(description, template);

  // Extract merchant
  const merchant = extractMerchantInfo(description) || '';

  if (timestamp && amount) {
    transactions.push({
      timestamp,
      amount,
      description,
      reference,
      status,
      type,
      merchant
    });
  } else {
    console.log('Missing required fields. Timestamp:', timestamp, 'Amount:', amount);
  }
}

function determineTransactionType(description: string, template: BankStatementTemplate): 'expense' | 'income' | 'transfer' {
  for (const [pattern, type] of Object.entries(template.transactionTypes)) {
    if (description.toUpperCase().includes(pattern.toUpperCase())) {
      if (type === 'expense' || type === 'income' || type === 'transfer') {
        return type;
      }
    }
  }
  return 'expense'; // Default to expense if no match found
}

function extractMerchantInfo(description: string): string | undefined {
  // Updated patterns for merchant extraction
  const patterns = [
    /(?:Pay Bill to|Send Money to|Buy Goods from|Withdraw from)\s+([A-Z0-9\s&.-]+?)(?:\s+(?:Account|Till|Agent).*|$)/i,
    /(?:received from)\s+([A-Z0-9\s&.-]+?)(?:\s+|$)/i,
    /(?:to|from)\s+([A-Z0-9\s&.-]+?)(?:\s+(?:Acc\.|Account|Till|For|Reference|-)|\s*$)/i
  ];

  for (const pattern of patterns) {
    const match = description.match(pattern);
    if (match && match[1]) {
      return match[1].trim();
    }
  }

  return undefined;
}