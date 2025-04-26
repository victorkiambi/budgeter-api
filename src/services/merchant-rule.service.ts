import { MerchantRule, MerchantType, PaymentChannel, Prisma, TransactionFrequency, MatchMethod, Transaction } from '../generated/prisma';
import prisma from '../config/database';

// Types for rule creation and matching
interface CreateMerchantRuleData {
  name: string;
  merchantType: MerchantType;
  paymentChannels: PaymentChannel[];
  patterns: string[];
  keywords: string[];
  mpesaPaybill?: string;
  mpesaTill?: string;
  mpesaReference?: string;
  categoryId: string;
  confidence: number;
  amountPatterns?: {
    typical?: number[];
    range?: { min: number; max: number };
  };
  frequency?: TransactionFrequency;
  metadata?: Record<string, any>;
}

interface MatchResult {
  rule: MerchantRule | null;
  confidence: number;
  matchMethod: MatchMethod;
  metadata?: Record<string, any>;
}

class MerchantRuleService {
  // Create a new merchant rule
  async createRule(data: CreateMerchantRuleData): Promise<MerchantRule> {
    return prisma.merchantRule.create({
      data: {
        ...data,
        confidence: new Prisma.Decimal(data.confidence),
        amountPatterns: data.amountPatterns ? JSON.stringify(data.amountPatterns) : null,
        metadata: data.metadata ? JSON.stringify(data.metadata) : null,
      }
    });
  }

  // Update an existing rule
  async updateRule(
    id: string,
    data: Partial<CreateMerchantRuleData>
  ): Promise<MerchantRule> {
    return prisma.merchantRule.update({
      where: { id },
      data: {
        ...data,
        confidence: data.confidence ? new Prisma.Decimal(data.confidence) : undefined,
        amountPatterns: data.amountPatterns ? JSON.stringify(data.amountPatterns) : undefined,
        metadata: data.metadata ? JSON.stringify(data.metadata) : undefined,
      }
    });
  }

  // Get all rules with optional filtering
  async getRules(params: {
    merchantType?: MerchantType;
    paymentChannel?: PaymentChannel;
    isActive?: boolean;
  } = {}): Promise<MerchantRule[]> {
    const where: Prisma.MerchantRuleWhereInput = {};
    
    if (params.merchantType) {
      where.merchantType = params.merchantType;
    }
    
    if (params.paymentChannel) {
      where.paymentChannels = { has: params.paymentChannel };
    }
    
    if (typeof params.isActive === 'boolean') {
      where.isActive = params.isActive;
    }
    
    return prisma.merchantRule.findMany({ where });
  }

  // Match a transaction against rules
  async findMatchingRule(transaction: Transaction): Promise<MatchResult> {
    // Start with highest confidence matches
    const potentialMatches: MatchResult[] = [];

    // 1. Try exact M-PESA paybill/till match if available
    if (transaction.mpesaPaybill || transaction.mpesaTill) {
      const mpesaMatch = await this.findMpesaMatch(transaction);
      if (mpesaMatch && mpesaMatch.confidence > 0.9) {
        return mpesaMatch;
      }
      if (mpesaMatch) {
        potentialMatches.push(mpesaMatch);
      }
    }

    // 2. Try pattern matching
    const patternMatch = await this.findPatternMatch(transaction);
    if (patternMatch && patternMatch.confidence > 0.8) {
      return patternMatch;
    }
    if (patternMatch) {
      potentialMatches.push(patternMatch);
    }

    // 3. Try keyword matching as fallback
    const keywordMatch = await this.findKeywordMatch(transaction);
    if (keywordMatch) {
      potentialMatches.push(keywordMatch);
    }

    // Return the highest confidence match or null
    return potentialMatches.reduce(
      (best, current) => 
        (current.confidence > (best?.confidence || 0)) ? current : best,
      null as MatchResult | null
    ) || {
      rule: null,
      confidence: 0,
      matchMethod: MatchMethod.FALLBACK
    };
  }

  // Helper method for M-PESA matching
  private async findMpesaMatch(transaction: Transaction): Promise<MatchResult | null> {
    const where: Prisma.MerchantRuleWhereInput = {
      isActive: true,
      OR: []
    };

    if (transaction.mpesaPaybill) {
      where.OR.push({ mpesaPaybill: transaction.mpesaPaybill });
    }

    if (transaction.mpesaTill) {
      where.OR.push({ mpesaTill: transaction.mpesaTill });
    }

    const rule = await prisma.merchantRule.findFirst({ where });
    
    if (!rule) return null;

    return {
      rule,
      confidence: rule.confidence.toNumber(),
      matchMethod: transaction.mpesaPaybill ? MatchMethod.MPESA_PAYBILL : MatchMethod.MPESA_TILL,
      metadata: {
        matchedPaybill: transaction.mpesaPaybill,
        matchedTill: transaction.mpesaTill
      }
    };
  }

  // Helper method for pattern matching
  private async findPatternMatch(transaction: Transaction): Promise<MatchResult | null> {
    const description = transaction.description.toLowerCase();
    const merchantName = transaction.merchantName?.toLowerCase() || '';

    // Get all active rules
    const rules = await prisma.merchantRule.findMany({
      where: { isActive: true }
    });

    for (const rule of rules) {
      // Check each pattern
      for (const pattern of rule.patterns) {
        try {
          const regex = new RegExp(pattern, 'i');
          if (regex.test(description) || regex.test(merchantName)) {
            // Validate amount patterns if they exist
            const amountConfidence = this.validateAmountPattern(
              transaction.amount.toNumber(),
              rule.amountPatterns as any
            );

            return {
              rule,
              confidence: rule.confidence.toNumber() * amountConfidence,
              matchMethod: MatchMethod.PATTERN_MATCH,
              metadata: {
                matchedPattern: pattern,
                amountConfidence
              }
            };
          }
        } catch (e) {
          console.error(`Invalid regex pattern in rule ${rule.id}:`, e);
        }
      }
    }

    return null;
  }

  // Helper method for keyword matching
  private async findKeywordMatch(transaction: Transaction): Promise<MatchResult | null> {
    const description = transaction.description.toLowerCase();
    const merchantName = transaction.merchantName?.toLowerCase() || '';

    const rules = await prisma.merchantRule.findMany({
      where: { isActive: true }
    });

    let bestMatch: MatchResult | null = null;
    let maxKeywordMatches = 0;

    for (const rule of rules) {
      let keywordMatches = 0;
      
      for (const keyword of rule.keywords) {
        const keywordLower = keyword.toLowerCase();
        if (description.includes(keywordLower) || merchantName.includes(keywordLower)) {
          keywordMatches++;
        }
      }

      if (keywordMatches > maxKeywordMatches) {
        maxKeywordMatches = keywordMatches;
        bestMatch = {
          rule,
          confidence: (rule.confidence.toNumber() * keywordMatches) / rule.keywords.length,
          matchMethod: MatchMethod.KEYWORD_MATCH,
          metadata: {
            matchedKeywords: keywordMatches,
            totalKeywords: rule.keywords.length
          }
        };
      }
    }

    return bestMatch;
  }

  // Helper method to validate amount patterns
  private validateAmountPattern(
    amount: number,
    patterns: { typical?: number[]; range?: { min: number; max: number } } | null
  ): number {
    if (!patterns) return 1;

    let confidence = 0;

    // Check typical amounts
    if (patterns.typical?.length) {
      const closest = patterns.typical.reduce((prev, curr) => 
        Math.abs(curr - amount) < Math.abs(prev - amount) ? curr : prev
      );
      
      // Calculate confidence based on how close the amount is to typical amounts
      const percentDiff = Math.abs(closest - amount) / closest;
      confidence = Math.max(confidence, 1 - Math.min(percentDiff, 1));
    }

    // Check range
    if (patterns.range) {
      if (amount >= patterns.range.min && amount <= patterns.range.max) {
        confidence = Math.max(confidence, 0.8); // Within range gets minimum 0.8 confidence
      }
    }

    return confidence || 0.5; // Default to 0.5 if no patterns match
  }

  // Record a match result
  async recordMatch(
    transaction: Transaction,
    matchResult: MatchResult
  ): Promise<void> {
    await prisma.transactionMatch.create({
      data: {
        transactionId: transaction.id,
        ruleId: matchResult.rule?.id,
        confidence: new Prisma.Decimal(matchResult.confidence),
        matchMethod: matchResult.matchMethod,
        paymentChannel: transaction.paymentChannel || PaymentChannel.BANK_TRANSFER,
        mpesaPaybill: transaction.mpesaPaybill,
        mpesaTill: transaction.mpesaTill,
        mpesaReference: transaction.mpesaReference,
        metadata: matchResult.metadata ? JSON.stringify(matchResult.metadata) : null
      }
    });
  }
}

// Export a singleton instance
export const merchantRuleService = new MerchantRuleService(); 