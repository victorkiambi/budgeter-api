import type { Category } from '../generated/prisma';
import { CategoryType, Prisma } from '../generated/prisma';
import prisma from '../config/database';
import { TransactionPreprocessor } from './transaction-preprocessor.service';
import { RawTransaction } from '../types/transaction.types';

class CategoryService {
  private transactionPreprocessor: TransactionPreprocessor;

  constructor() {
    this.transactionPreprocessor = new TransactionPreprocessor();
  }

  async findMatchingCategory(description: string, amount?: number, currency?: string): Promise<Category | null> {
    // Create a raw transaction object for preprocessing
    const rawTransaction: RawTransaction = {
      description,
      amount: amount || 0,
      currency: currency || 'USD',
      date: new Date(),
      type: 'expense'
    };

    // Preprocess the transaction
    const preprocessed = await this.transactionPreprocessor.preprocess(rawTransaction);

    // If we have a high-confidence merchant match with a category, use that
    if (preprocessed.merchantInfo.confidence > 0.8) {
      const merchantRule = await prisma.merchantRule.findFirst({
        where: {
          name: preprocessed.merchantInfo.name || undefined
        },
        include: {
          category: true
        }
      });

      if (merchantRule?.category) {
        return merchantRule.category;
      }
    }

    // Otherwise, fall back to keyword matching with categories
    const categories = await prisma.category.findMany();
    let bestMatch: { category: Category; score: number } | null = null;

    for (const category of categories) {
      if (!category.keywords) continue;

      // Get category keywords
      const categoryKeywords = category.keywords.toLowerCase().split(',').map((k: string) => k.trim());
      
      // Calculate match score based on keyword matches
      const matchingKeywords = preprocessed.patterns.keywords.filter(
        keyword => categoryKeywords.includes(keyword)
      );

      if (matchingKeywords.length > 0) {
        const score = matchingKeywords.length / categoryKeywords.length;
        
        if (!bestMatch || score > bestMatch.score) {
          bestMatch = { category, score };
        }
      }
    }

    return bestMatch?.category || null;
  }

  async createCategory(data: {
    name: string;
    type: CategoryType;
    keywords?: string | null;
  }): Promise<Category> {
    return prisma.category.create({
      data: {
        name: data.name,
        type: data.type,
        keywords: data.keywords
      }
    });
  }

  async updateCategory(
    id: string,
    data: {
      name?: string;
      type?: CategoryType;
      keywords?: string | null;
    }
  ): Promise<Category> {
    return prisma.category.update({
      where: { id },
      data
    });
  }

  async getCategories(params: {
    type?: CategoryType;
    search?: string;
  } = {}): Promise<Category[]> {
    const where: Prisma.CategoryWhereInput = {};
    
    if (params.type) {
      where.type = params.type;
    }
    
    if (params.search) {
      where.OR = [
        { name: { contains: params.search, mode: 'insensitive' } },
        { keywords: { contains: params.search, mode: 'insensitive' } }
      ];
    }
    
    return prisma.category.findMany({ where });
  }
}

// Export a singleton instance
export const categoryService = new CategoryService(); 