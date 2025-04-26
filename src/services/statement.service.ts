import { PrismaClient } from '../generated/prisma';
import type { FileType, Statement as PrismaStatement, Prisma } from '../generated/prisma';
import { GetStatementsDTO, StatementResponse, GetStatementsResponse, ParsedTransaction } from '../types/statement.types';
import { processCSVFile } from '../utils/csv-parser';
import { processPDFFile } from '../utils/pdf-parser';
import * as fs from 'fs/promises';

const prisma = new PrismaClient();

type StatementWithCount = PrismaStatement & {
  _count: {
    transactions: number;
  };
};

// Define the shape of transaction data that Prisma expects
type TransactionCreateInput = Prisma.TransactionCreateManyInput;

export interface IStatementService {
  createStatement(data: {
    userId: string;
    accountId: string;
    filename: string;
    fileType: FileType;
  }): Promise<StatementResponse>;
  uploadStatement(
    userId: string,
    accountId: string,
    file: Express.Multer.File,
    fileType: FileType
  ): Promise<StatementResponse>;
  getStatements(
    userId: string,
    params: GetStatementsDTO
  ): Promise<GetStatementsResponse>;
  getStatementById(
    userId: string,
    statementId: string
  ): Promise<StatementResponse | null>;
}

export class StatementService implements IStatementService {
  async createStatement(data: {
    userId: string;
    accountId: string;
    filename: string;
    fileType: FileType;
  }): Promise<StatementResponse> {
    try {
      // Verify account exists and belongs to user
      const account = await prisma.account.findFirst({
        where: {
          id: data.accountId,
          userId: data.userId
        }
      });

      if (!account) {
        throw new Error(`Account not found or does not belong to user`);
      }

      // Create statement record
      const statement = await prisma.statement.create({
        data: {
          filename: data.filename,
          fileType: data.fileType,
          user: {
            connect: {
              id: data.userId
            }
          },
          account: {
            connect: {
              id: data.accountId
            }
          }
        }
      });

      return {
        id: statement.id,
        userId: statement.userId,
        accountId: statement.accountId,
        filename: statement.filename,
        fileType: statement.fileType,
        uploadedAt: statement.uploadedAt,
        processedAt: statement.processedAt
      };
    } catch (error) {
      throw new Error('Failed to create statement record');
    }
  }

  async uploadStatement(
    userId: string,
    accountId: string,
    file: Express.Multer.File,
    fileType: FileType
  ): Promise<StatementResponse> {
    try {
      // Verify account exists and belongs to user
      const account = await prisma.account.findFirst({
        where: {
          id: accountId,
          userId
        }
      });

      if (!account) {
        throw new Error(`Account not found or does not belong to user`);
      }

      const statement = await prisma.statement.create({
        data: {
          userId,
          accountId,
          filename: file.originalname,
          fileType
        }
      });

      try {
        const fileContent = await fs.readFile(file.path);
        
        // Process file based on type
        const transactions: ParsedTransaction[] = fileType === 'csv'
          ? await processCSVFile(file.path)
          : await processPDFFile(fileContent, 'mpesa');

        // Convert parsed transactions to Prisma-compatible format
        const transactionData: TransactionCreateInput[] = transactions.map(t => ({
          userId,
          accountId,
          statementId: statement.id,
          date: t.timestamp,
          description: t.description,
          amount: t.amount,
          type: t.type,
          currency: 'KES',
          merchantName: t.merchant,
        }));

        // Save transactions with proper typing
        await prisma.transaction.createMany({
          data: transactionData
        });

        // Update statement as processed
        await prisma.statement.update({
          where: { id: statement.id },
          data: { processedAt: new Date() }
        });

        // Clean up temporary file
        await fs.unlink(file.path);

        return {
          id: statement.id,
          userId: statement.userId,
          accountId: statement.accountId,
          filename: statement.filename,
          fileType: statement.fileType,
          uploadedAt: statement.uploadedAt,
          processedAt: statement.processedAt,
          transactionCount: transactions.length
        };
      } catch (error) {
        // If processing fails, mark statement as failed and rethrow
        await prisma.statement.update({
          where: { id: statement.id },
          data: { processedAt: null }
        });
        throw error;
      }
    } catch (error) {
      // Clean up temporary file in case of error
      if (file.path) {
        try {
          await fs.unlink(file.path);
        } catch (unlinkError) {
          // Ignore unlink errors
        }
      }
      throw error;
    }
  }

  async getStatements(
    userId: string,
    { accountId, fileType, startDate, endDate, page = 1, limit = 10 }: GetStatementsDTO
  ): Promise<GetStatementsResponse> {
    // Build where clause
    const where: any = { userId };
    
    if (accountId) where.accountId = accountId;
    if (fileType) where.fileType = fileType;
    if (startDate) where.uploadedAt = { gte: startDate };
    if (endDate) {
      where.uploadedAt = {
        ...(where.uploadedAt || {}),
        lte: endDate
      };
    }

    // Get total count
    const total = await prisma.statement.count({ where });
    const pages = Math.ceil(total / Number(limit));

    // Get statements
    const statements = await prisma.statement.findMany({
      where,
      orderBy: { uploadedAt: 'desc' },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      include: {
        _count: {
          select: { transactions: true }
        }
      }
    });

    return {
      statements: statements.map((statement: StatementWithCount) => ({
        id: statement.id,
        userId: statement.userId,
        accountId: statement.accountId,
        filename: statement.filename,
        fileType: statement.fileType,
        uploadedAt: statement.uploadedAt,
        processedAt: statement.processedAt,
        transactionCount: statement._count.transactions
      })),
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        pages
      }
    };
  }

  async getStatementById(
    userId: string,
    statementId: string
  ): Promise<StatementResponse | null> {
    const statement = await prisma.statement.findFirst({
      where: {
        id: statementId,
        userId
      },
      include: {
        _count: {
          select: { transactions: true }
        }
      }
    });

    if (!statement) return null;

    return {
      id: statement.id,
      userId: statement.userId,
      accountId: statement.accountId,
      filename: statement.filename,
      fileType: statement.fileType,
      uploadedAt: statement.uploadedAt,
      processedAt: statement.processedAt,
      transactionCount: statement._count.transactions
    };
  }
}

export const statementService = new StatementService(); 