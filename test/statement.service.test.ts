import { statementService } from '../src/services/statement.service';
import { PrismaClient } from '../src/generated/prisma';
import path from 'path';
import fs from 'fs/promises';

const prisma = new PrismaClient();

describe('StatementService', () => {
  let userId: string;
  let accountId: string;

  beforeAll(async () => {
    // Create test user
    const user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        passwordHash: 'hashedpassword',
        name: 'Test User'
      }
    });
    userId = user.id;

    // Create test account
    const account = await prisma.account.create({
      data: {
        userId: user.id,
        name: 'Test Account',
        type: 'CHECKING',
        currency: 'KES',
        balance: 0,
        isDefault: true
      }
    });
    accountId = account.id;
  });

  afterAll(async () => {
    // Clean up test data
    await prisma.user.delete({ where: { id: userId } });
    await prisma.$disconnect();
  });

  describe('createStatement', () => {
    it('should create a statement record', async () => {
      const result = await statementService.createStatement({
        userId,
        accountId,
        filename: 'test.csv',
        fileType: 'csv'
      });

      expect(result).toBeDefined();
      expect(result.userId).toBe(userId);
      expect(result.accountId).toBe(accountId);
      expect(result.filename).toBe('test.csv');
      expect(result.fileType).toBe('csv');
    });
  });

  describe('uploadStatement', () => {
    it('should process and upload a CSV statement', async () => {
      const filePath = path.join(__dirname, 'fixtures', 'statement.csv');
      const fileBuffer = await fs.readFile(filePath);
      
      const file = {
        originalname: 'statement.csv',
        path: filePath,
        buffer: fileBuffer,
        size: fileBuffer.length,
        mimetype: 'text/csv'
      } as Express.Multer.File;

      const result = await statementService.uploadStatement(
        userId,
        accountId,
        file,
        'csv'
      );

      expect(result).toBeDefined();
      expect(result.userId).toBe(userId);
      expect(result.accountId).toBe(accountId);
      expect(result.filename).toBe('statement.csv');
      expect(result.fileType).toBe('csv');
      expect(result.processedAt).toBeDefined();
      expect(result.transactionCount).toBe(3); // Number of transactions in our test CSV

      // Verify transactions were created
      const transactions = await prisma.transaction.findMany({
        where: {
          userId,
          accountId,
          statementId: result.id
        }
      });

      expect(transactions).toHaveLength(3);
      
      // Verify transaction details
      const groceryTransaction = transactions.find(t => t.description === 'Grocery Shopping');
      expect(groceryTransaction).toBeDefined();
      expect(groceryTransaction?.amount.toNumber()).toBe(50);
      expect(groceryTransaction?.type).toBe('expense');

      const salaryTransaction = transactions.find(t => t.description === 'Salary Deposit');
      expect(salaryTransaction).toBeDefined();
      expect(salaryTransaction?.amount.toNumber()).toBe(1000);
      expect(salaryTransaction?.type).toBe('income');
    });
  });
}); 