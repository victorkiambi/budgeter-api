import { z } from 'zod';
import {FileType} from '../generated/prisma';

// Base schema for statement validation
export const statementBaseSchema = z.object({
  accountId: z.string().uuid(),
  fileType: z.nativeEnum(FileType)
});

// Schema for file upload
export const uploadStatementSchema = statementBaseSchema.extend({
  file: z.any() // Will be validated by multer middleware
});

// Statement interface
export interface Statement {
  id: string;
  userId: string;
  accountId: string;
  filename: string;
  fileType: FileType;
  uploadedAt: Date;
  processedAt: Date | null;
}

// Bank statement template configuration
export interface BankStatementTemplate {
  bankId: string;
  name: string;
  dateFormats: string[];
  // Added columnHeaders for tabular-based statements like M-PESA
  columnHeaders?: string[];
  patterns: {
    transaction: RegExp;
    transactionType: RegExp;
    amount: RegExp;
    status: RegExp;
    time: RegExp;
    reference: RegExp;
    merchant?: RegExp;
    // Additional patterns for specific bank statement formats
    receipt?: RegExp;
    datetime?: RegExp;
  };
  multilineTransaction: boolean;
  currency: string;
  datePosition: 'start' | 'end';
  amountPosition: 'start' | 'middle' | 'end';
  transactionTypes: Record<string, 'expense' | 'income' | 'transfer'>;
  headerIdentifier?: RegExp;
  footerIdentifier?: RegExp;
  receiptPattern?: RegExp;
  dateTimePattern?: RegExp;
  amountPattern?: RegExp;
  descriptionPattern?: RegExp;
  referencePattern?: RegExp;
  statusPattern?: RegExp;
}

// Schema for statement query
export const getStatementsSchema = z.object({
  accountId: z.string().uuid().optional(),
  fileType: z.nativeEnum(FileType).optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  page: z.number().int().min(1).optional().default(1),
  limit: z.number().int().min(1).max(100).optional().default(50)
});

// Types inferred from schemas
export type UploadStatementDTO = z.infer<typeof uploadStatementSchema>;
export type GetStatementsDTO = z.infer<typeof getStatementsSchema>;

// Response types
export interface StatementResponse {
  id: string;
  userId: string;
  accountId: string;
  filename: string;
  fileType: FileType;
  uploadedAt: Date;
  processedAt: Date | null;
  transactionCount?: number;
}

export interface GetStatementsResponse {
  statements: StatementResponse[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
}

export interface ParsedTransaction {
  timestamp: Date;
  amount: number;
  description: string;
  type: 'expense' | 'income' | 'transfer';
  merchant?: string;
  reference?: string;  // Transaction reference/receipt number
  status?: string;     // Transaction status (e.g., COMPLETED, FAILED)
}