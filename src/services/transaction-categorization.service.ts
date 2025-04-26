import { Transaction } from '../generated/prisma';
import { merchantRuleService } from './merchant-rule.service';
import { categoryService } from './category.service';

class TransactionCategorizationService {
  async categorizeTransaction(transaction: Transaction): Promise<Transaction> {
    // Skip if already categorized
    if (transaction.categoryId) {
      return transaction;
    }

    // Try to match using merchant rules
    const matchResult = await merchantRuleService.findMatchingRule(transaction);

    // Record the match attempt regardless of success
    await merchantRuleService.recordMatch(transaction, matchResult);

    // If we have a high confidence match, use it
    if (matchResult.rule && matchResult.confidence >= 0.8) {
      const updatedTransaction = await this.updateTransactionCategory(
        transaction.id,
        matchResult.rule.categoryId
      );
      return updatedTransaction;
    }

    // Fallback to keyword matching if merchant rule matching failed
    const keywordCategory = await categoryService.findMatchingCategory(
      transaction.description
    );

    if (keywordCategory) {
      const updatedTransaction = await this.updateTransactionCategory(
        transaction.id,
        keywordCategory.id
      );
      return updatedTransaction;
    }

    return transaction;
  }

  private async updateTransactionCategory(
    transactionId: string,
    categoryId: string
  ): Promise<Transaction> {
    return prisma.transaction.update({
      where: { id: transactionId },
      data: { categoryId }
    });
  }

  // Batch categorization for multiple transactions
  async categorizeBatch(transactions: Transaction[]): Promise<Transaction[]> {
    const results = await Promise.all(
      transactions.map(transaction => this.categorizeTransaction(transaction))
    );
    return results;
  }

  // Re-categorize a transaction and provide feedback
  async recategorizeWithFeedback(
    transactionId: string,
    newCategoryId: string,
    wasAutoMatchCorrect: boolean
  ): Promise<Transaction> {
    // Get the existing match if any
    const existingMatch = await prisma.transactionMatch.findUnique({
      where: { transactionId }
    });

    if (existingMatch) {
      // Update the match with feedback
      await prisma.transactionMatch.update({
        where: { id: existingMatch.id },
        data: {
          wasCorrect: wasAutoMatchCorrect,
          correctedCategoryId: wasAutoMatchCorrect ? null : newCategoryId
        }
      });
    }

    // Update the transaction category
    return this.updateTransactionCategory(transactionId, newCategoryId);
  }
}

// Export a singleton instance
export const transactionCategorizationService = new TransactionCategorizationService(); 