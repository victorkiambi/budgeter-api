import { parse } from 'csv-parse';
import { createReadStream } from 'fs';
import type { Prisma } from '../generated/prisma';
import { categoryService } from '../services/category.service';
import { ParsedTransaction } from '../types/statement.types';

interface RawTransaction {
  date: string;
  description: string;
  amount: string;
  type?: 'income' | 'expense' | 'transfer';
  currency: string;
}

const REQUIRED_COLUMNS = ['date', 'description', 'amount', 'currency'];

export async function processCSVFile(filePath: string): Promise<ParsedTransaction[]> {
  return new Promise((resolve, reject) => {
    const transactions: ParsedTransaction[] = [];
    const parser = parse({
      columns: true,
      skip_empty_lines: true,
      trim: true,
      relax_column_count: true,
      on_record: (record: any) => {
        const missingColumns = REQUIRED_COLUMNS.filter(col => !(col in record));
        if (missingColumns.length > 0) {
          console.warn(`Skipping record due to missing columns: ${missingColumns.join(', ')}`, record);
          return null;
        }
        return record;
      }
    });

    createReadStream(filePath)
      .pipe(parser)
      .on('data', async (row: RawTransaction) => {
        try {
          const transaction = await parseTransaction(row);
          if (transaction) transactions.push(transaction);
        } catch (error) {
          console.error('Error parsing row:', error, row);
        }
      })
      .on('end', () => resolve(transactions))
      .on('error', reject);
  });
}

async function parseTransaction(row: RawTransaction): Promise<ParsedTransaction> {
  // Parse date
  const timestamp = new Date(row.date);
  if (isNaN(timestamp.getTime())) {
    throw new Error(`Invalid date format: ${row.date}`);
  }

  // Parse amount and determine transaction type
  let amount = parseFloat(row.amount.replace(/[^0-9.-]/g, ''));
  if (isNaN(amount)) {
    throw new Error(`Invalid amount format: ${row.amount}`);
  }

  // Determine transaction type
  let type = row.type;
  if (!type) {
    type = determineTransactionType(amount);
    amount = Math.abs(amount);
  }

  // Find matching category
  const matchingCategory = await categoryService.findMatchingCategory(row.description);

  return {
    timestamp,
    description: row.description.trim(),
    amount,
    type,
    merchant: undefined
  };
}

function determineTransactionType(amount: number): 'income' | 'expense' | 'transfer' {
  if (amount > 0) {
    return 'income';
  } else if (amount < 0) {
    return 'expense';
  } else {
    return 'transfer';
  }
} 