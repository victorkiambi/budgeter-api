import { BankStatementTemplate } from '../types/statement.types';

export const bankTemplates: BankStatementTemplate[] = [
  {
    bankId: 'default',
    name: 'Default Bank Template',
    dateFormats: [
      'DD/MM/YYYY',
      'MM/DD/YYYY',
      'YYYY-MM-DD'
    ],
    patterns: {
      // Match full transaction line
      transaction: /^(\d{2}:\d{2}:\d{2})(.*?)(COMPLETED)$/,
      // Match transaction types
      transactionType: /(Pay Bill|Customer Transfer of Funds|OverDraft of Credit Party|Pay Merchant)/,
      // Match amounts with optional decimals
      amount: /\b\d+(?:,\d{3})*(?:\.\d{2})?\b/,
      // Match status
      status: /(COMPLETED|FAILED|PENDING)/,
      // Match time
      time: /^(\d{2}:\d{2}:\d{2})/,
      // Match reference numbers (if any)
      reference: /Ref:\s*([A-Z0-9]+)/i
    },
    multilineTransaction: false,
    currency: 'KES',
    datePosition: 'start',
    amountPosition: 'end',
    transactionTypes: {
      'Pay Bill': 'expense',
      'Customer Transfer': 'transfer',
      'OverDraft': 'expense',
      'Pay Merchant': 'expense'
    },
    headerIdentifier: /Statement Period/i,
    footerIdentifier: /End of Statement/i
  }
]; 