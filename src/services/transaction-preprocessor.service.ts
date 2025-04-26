import { MerchantType, PaymentChannel, Prisma, TransactionFrequency } from '../generated/prisma';
import { PreprocessedTransaction, RawTransaction } from '../types/transaction.types';
import { TextNormalizer } from '../utils/text-normalizer';
import prisma from '../config/database';

interface MerchantRule {
  id: string;
  name: string;
  patterns: string[];
  merchantType: MerchantType;
  confidence: number | Prisma.Decimal;
  keywords?: string[];
  frequency?: TransactionFrequency | null;
  categoryId: string;
  mpesaPaybill: string | null;
  mpesaTill: string | null;
  mpesaReference: string | null;
  createdAt: Date;
  updatedAt: Date;
  metadata: Prisma.JsonValue;
  paymentChannels: string[];
  isActive: boolean;
  amountPatterns: Prisma.JsonValue | null;
}

export class TransactionPreprocessor {
  private merchantRulesCache: Map<string, MerchantRule> | null = null;
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
  private lastCacheUpdate: number = 0;

  async preprocess(transaction: RawTransaction): Promise<PreprocessedTransaction> {
    // Refresh merchant rules cache if needed
    await this.refreshMerchantRulesCache();

    const normalizedDescription = TextNormalizer.normalizeText(transaction.description);
    const keywords = TextNormalizer.extractKeywords(transaction.description);

    // Extract merchant information
    const merchantInfo = await this.extractMerchantInfo(transaction.description, normalizedDescription);

    // Extract payment information
    const paymentInfo = this.extractPaymentInfo(transaction);

    // Extract patterns
    const patterns = this.extractPatterns(transaction.description);

    // Calculate confidence score
    const confidence = this.calculateConfidence(merchantInfo.confidence, patterns);

    return {
      originalDescription: transaction.description,
      normalizedDescription,
      merchantInfo,
      paymentInfo,
      patterns,
      metadata: {
        processingDate: new Date(),
        normalizedAmount: transaction.amount,
        confidence
      }
    };
  }

  private async refreshMerchantRulesCache(): Promise<void> {
    const now = Date.now();
    if (!this.merchantRulesCache || now - this.lastCacheUpdate > this.CACHE_DURATION) {
      const merchantRules = await prisma.merchantRule.findMany();
      this.merchantRulesCache = new Map(
        merchantRules.map(rule => [rule.id, rule])
      );
      this.lastCacheUpdate = now;
    }
  }

  private async extractMerchantInfo(
    originalDescription: string, 
    normalizedDescription: string
  ): Promise<PreprocessedTransaction['merchantInfo']> {
    if (!this.merchantRulesCache) {
      return { name: null, type: null, confidence: 0 };
    }

    let bestMatch = {
      name: null as string | null,
      type: null as MerchantType | null,
      confidence: 0
    };

    for (const rule of this.merchantRulesCache.values()) {
      // Check patterns
      for (const pattern of rule.patterns) {
        const regex = new RegExp(pattern, 'i');
        if (regex.test(originalDescription)) {
          const confidence = parseFloat(rule.confidence.toString());
          if (confidence > bestMatch.confidence) {
            bestMatch = {
              name: rule.name,
              type: rule.merchantType,
              confidence
            };
          }
        }
      }

      // Check keywords if no strong pattern match
      if (bestMatch.confidence < 0.8 && rule.keywords) {
        const matchCount = rule.keywords.reduce((count: number, keyword: string) => {
          return normalizedDescription.includes(keyword.toLowerCase()) ? count + 1 : count;
        }, 0);

        if (matchCount > 0) {
          const keywordConfidence = (matchCount / rule.keywords.length) * parseFloat(rule.confidence.toString());
          if (keywordConfidence > bestMatch.confidence) {
            bestMatch = {
              name: rule.name,
              type: rule.merchantType,
              confidence: keywordConfidence
            };
          }
        }
      }
    }

    return bestMatch;
  }

  private extractPaymentInfo(
    transaction: RawTransaction
  ): PreprocessedTransaction['paymentInfo'] {
    // Determine if transaction is recurring based on merchant rules
    const isRecurring = this.isRecurringTransaction(transaction);

    return {
      channel: transaction.paymentChannel || null,
      amount: transaction.amount,
      currency: transaction.currency,
      isRecurring
    };
  }

  private isRecurringTransaction(transaction: RawTransaction): boolean {
    if (!this.merchantRulesCache) return false;

    for (const rule of this.merchantRulesCache.values()) {
      // Check if transaction matches any merchant rule with recurring frequency
      const isMatch = rule.patterns.some(pattern => 
        new RegExp(pattern, 'i').test(transaction.description)
      );

      if (isMatch && rule.frequency) {
        // Consider all frequencies except IRREGULAR as recurring
        return rule.frequency !== TransactionFrequency.IRREGULAR;
      }
    }

    return false;
  }

  private calculateConfidence(
    merchantConfidence: number,
    patterns: {
      transactionCode?: string;
      referenceNumber?: string;
      keywords: string[];
    }
  ): number {
    let confidence = merchantConfidence;

    // Adjust confidence based on available patterns
    if (patterns.transactionCode) confidence += 0.1;
    if (patterns.referenceNumber) confidence += 0.1;
    if (patterns.keywords.length > 0) {
      confidence += Math.min(0.1, patterns.keywords.length * 0.02);
    }

    // Cap confidence at 1.0
    return Math.min(1.0, confidence);
  }

  private extractPatterns(description: string): PreprocessedTransaction['patterns'] {
    return {
      transactionCode: TextNormalizer.extractTransactionCode(description) || undefined,
      referenceNumber: TextNormalizer.extractReferenceNumber(description) || undefined,
      keywords: TextNormalizer.extractKeywords(description)
    };
  }
} 