import { z } from 'zod';

// Account type enum
export const AccountType = {
  CHECKING: 'CHECKING',
  SAVINGS: 'SAVINGS',
  CREDIT_CARD: 'CREDIT_CARD',
  INVESTMENT: 'INVESTMENT',
  LOAN: 'LOAN',
  WALLET: 'WALLET',
} as const;

// Currency enum
export const Currency = {
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
  KES: 'KES',
} as const;

// Base account schema
const accountBaseSchema = {
  name: z.string().min(1).max(100),
  type: z.enum([
    AccountType.CHECKING,
    AccountType.SAVINGS,
    AccountType.CREDIT_CARD,
    AccountType.INVESTMENT,
    AccountType.LOAN,
    AccountType.WALLET,
  ]),
  currency: z.enum([Currency.USD, Currency.EUR, Currency.GBP, Currency.KES]),
  isDefault: z.boolean().optional(),
};

// Schema for creating a new account
export const createAccountSchema = z.object({
  ...accountBaseSchema,
  balance: z.number(),
});

// Schema for updating an existing account
export const updateAccountSchema = z.object({
  ...accountBaseSchema,
}).partial();

// Schema for updating account balance
export const updateBalanceSchema = z.object({
  balance: z.number(),
});

// Schema for account query parameters
export const accountQuerySchema = z.object({
  type: z.enum([
    AccountType.CHECKING,
    AccountType.SAVINGS,
    AccountType.CREDIT_CARD,
    AccountType.INVESTMENT,
    AccountType.LOAN,
    AccountType.WALLET,
  ]).optional(),
  currency: z.enum([Currency.USD, Currency.EUR, Currency.GBP, Currency.KES]).optional(),
  isDefault: z.boolean().optional(),
});

// TypeScript types
export type AccountType = keyof typeof AccountType;
export type Currency = keyof typeof Currency;

export type CreateAccountInput = z.infer<typeof createAccountSchema>;
export type UpdateAccountInput = z.infer<typeof updateAccountSchema>;
export type UpdateBalanceInput = z.infer<typeof updateBalanceSchema>;
export type AccountQueryParams = z.infer<typeof accountQuerySchema>;

// Response Types
export interface AccountResponse {
  id: number;
  name: string;
  type: AccountType;
  currency: Currency;
  balance: number;
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AccountsResponse {
  accounts: AccountResponse[];
  total: number;
} 