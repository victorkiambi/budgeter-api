# M-PESA PDF Parser

A specialized parser for extracting transaction data from M-PESA statement PDFs.

## Features

- Parses M-PESA statements into structured transaction data
- Handles the tabular format used in M-PESA statements
- Processes multi-page statements
- Extracts transaction details including timestamps, amounts, descriptions, and merchants
- Categorizes transactions as income, expense, or transfer
- Exports transaction data to CSV for further analysis

## Installation

```
npm install
```

## Usage

### From the Command Line

```bash
npx ts-node src/mpesa-parser.ts path/to/mpesa-statement.pdf [output.csv]
```

### In Code

```typescript
import { parseMpesaStatement } from './mpesa-parser';

async function processStatement() {
  const pdfPath = 'path/to/mpesa-statement.pdf';
  const transactions = await parseMpesaStatement(pdfPath);
  
  console.log(`Parsed ${transactions.length} transactions`);
  console.log(transactions[0]); // View the first transaction
}

processStatement();
```

## Transaction Data Structure

Each parsed transaction includes:

- `timestamp`: Date and time of the transaction
- `amount`: Transaction amount in KES
- `description`: Full transaction description
- `reference`: Receipt number (e.g., "TDN9VLQPFB")
- `status`: Transaction status (e.g., "COMPLETED", "FAILED")
- `type`: Transaction type ("income", "expense", or "transfer")
- `merchant`: Extracted merchant name

## How It Works

The parser utilizes the `pdf.js-extract` library to extract text content from M-PESA PDF statements. It then:

1. Identifies the tabular structure of the statement
2. Extracts transaction rows based on receipt numbers
3. Identifies components of each transaction (timestamp, description, amounts)
4. Post-processes transactions to handle special cases, duplicates, and related entries
5. Categorizes transactions based on description and amount patterns

## Notes

- The parser has been optimized for M-PESA statement PDFs with the standard format
- For best results, use statements from the M-PESA website or app
- The parser works entirely client-side without sending data to external services

## Known Limitations

- Some complex multi-line descriptions might be truncated
- Transactions with the same receipt number might cause issues
- Very large PDFs (over 50 pages) might cause performance issues
