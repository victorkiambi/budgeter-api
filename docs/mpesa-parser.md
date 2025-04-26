# M-PESA PDF Statement Parser

This document describes the implementation and usage of the improved M-PESA PDF statement parser in the budgeter application.

## Overview

The M-PESA PDF parser is designed to extract transaction data from M-PESA statements in PDF format. It handles the tabular structure of M-PESA statements and extracts detailed information about each transaction.

## Features

- **Tabular Data Recognition**: Recognizes the columnar structure of M-PESA statements
- **Multi-page Support**: Handles page breaks and continuations in multi-page statements
- **Accurate Transaction Categorization**: Categorizes transactions as income, expense, or transfer
- **Merchant Extraction**: Extracts merchant information from transaction details
- **Comprehensive Data Extraction**: Captures receipt numbers, timestamps, amounts, descriptions, and statuses

## Implementation Details

The parser is implemented in TypeScript and consists of the following key components:

1. **M-PESA Template**: Configuration for parsing M-PESA statements
2. **Transaction Extraction**: Logic to extract transactions from the PDF text
3. **Row Parsing**: Logic to parse individual transaction rows
4. **Data Validation**: Validation and processing of extracted data

## Usage

### Basic Usage

```typescript
import { processPDFFile } from './utils/pdf-parser';
import * as fs from 'fs';

async function parseMpesaStatement(filePath: string) {
  try {
    const buffer = fs.readFileSync(filePath);
    const transactions = await processPDFFile(buffer, 'mpesa');
    
    console.log(`Found ${transactions.length} transactions`);
    return transactions;
  } catch (error) {
    console.error('Error parsing M-PESA statement:', error);
    throw error;
  }
}
```

### Analysis Tools

Two analysis tools are included:

1. **analyze-mpesa-transactions.ts**: Analyzes transaction data to produce insights on spending patterns, categories, and merchant distributions.

2. **export-mpesa-transactions.ts**: Exports transaction data to CSV files for further analysis in external tools.

## Data Format

Each transaction is parsed into a `ParsedTransaction` object with the following properties:

- `timestamp`: Date and time of the transaction
- `amount`: Transaction amount
- `description`: Full transaction description
- `reference`: Receipt number
- `status`: Transaction status (e.g., "COMPLETED", "FAILED")
- `type`: Transaction type ("income", "expense", or "transfer")
- `merchant`: Extracted merchant name

## Limitations and Future Improvements

- The parser currently expects a specific format for M-PESA statements. Changes in statement format may require updates.
- Currently optimized for statements with tabular structure - non-tabular formats would require different parsing approaches.
- Future improvements could include more sophisticated merchant identification and transaction categorization.

## Testing

The parser includes test cases for various types of M-PESA transactions:

- Customer transfers
- Transfer charges
- Merchant payments
- Pay bill transactions
- Business payments

Run tests using:

```
npm test src/utils/pdf-parser.test.ts
```