import { StatementService } from '../statement.service';
import { TransactionPreprocessor } from '../transaction-preprocessor.service';
import { transactionCategorizationService } from '../transaction-categorization.service';
import { PrismaClient, Prisma } from '../../generated/prisma';
import { mockDeep, mockReset } from 'jest-mock-extended';

// Mock Prisma
const prismaMock = mockDeep<PrismaClient>();

// Mock services
jest.mock('../transaction-preprocessor.service');
jest.mock('../transaction-categorization.service');

describe('StatementService', () => {
  let statementService: StatementService;
  
  beforeEach(() => {
    mockReset(prismaMock);
    statementService = new StatementService();
  });

  describe('createStatement', () => {
    it('should create a statement record', async () => {
      // Mock data
      const userId = 'user123';
      const accountId = 'account123';
      const data = {
        userId,
        accountId,
        filename: 'test.csv',
        fileType: 'csv' as const
      };

      // Mock dependencies
      prismaMock.account.findFirst.mockResolvedValue({
        id: accountId,
        userId,
        name: 'Test Account',
        type: 'CHECKING',
        currency: 'KES',
        balance: new Prisma.Decimal(0),
        isDefault: true,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      prismaMock.statement.create.mockResolvedValue({
        id: 'statement123',
        ...data,
        uploadedAt: new Date(),
        processedAt: null
      });

      // Execute
      const result = await statementService.createStatement(data);

      // Verify
      expect(result).toBeDefined();
      expect(result.userId).toBe(userId);
      expect(result.accountId).toBe(accountId);
      expect(result.filename).toBe('test.csv');
      expect(result.fileType).toBe('csv');
    });

    it('should throw error if account not found', async () => {
      // Mock dependencies
      prismaMock.account.findFirst.mockResolvedValue(null);

      // Execute and verify
      await expect(
        statementService.createStatement({
          userId: 'user123',
          accountId: 'account123',
          filename: 'test.csv',
          fileType: 'csv'
        })
      ).rejects.toThrow('Account not found or does not belong to user');
    });
  });
}); 