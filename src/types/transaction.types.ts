import { MerchantType, PaymentChannel } from '../generated/prisma';

export interface RawTransaction {
  id?: string;
  description: string;
  amount: number;
  currency: string;
  date: Date;
  type: 'expense' | 'income' | 'transfer';
  paymentChannel?: PaymentChannel;
  merchantName?: string;
  reference?: string;
}

export interface PreprocessedTransaction {
  originalDescription: string;
  normalizedDescription: string;
  merchantInfo: {
    name: string | null;
    type: MerchantType | null;
    confidence: number;
  };
  paymentInfo: {
    channel: PaymentChannel | null;
    amount: number;
    currency: string;
    isRecurring: boolean;
  };
  patterns: {
    transactionCode?: string;
    referenceNumber?: string;
    keywords: string[];
  };
  metadata: {
    processingDate: Date;
    normalizedAmount: number; // Amount in base currency
    confidence: number;
  };
}

export interface TransactionPattern {
  pattern: string;
  type: 'merchant' | 'reference' | 'code';
  confidence: number;
}

export interface MerchantPattern {
  name: string;
  patterns: string[];
  type: MerchantType;
  confidence: number;
} 