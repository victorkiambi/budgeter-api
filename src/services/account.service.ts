import { PrismaClient } from '@prisma/client';
import { 
  CreateAccountInput,
  UpdateAccountInput, 
  UpdateBalanceInput,
  AccountResponse,
  AccountType,
  Currency
} from '../types/account.types';
import {Account} from "../generated/prisma";

class AccountService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createAccount(userId: string, data: CreateAccountInput): Promise<AccountResponse> {
    // If this is set as default, remove default from other accounts of same currency
    if (data.isDefault) {
      await this.prisma.account.updateMany({
        where: {
          userId,
          currency: data.currency,
          isDefault: true
        },
        data: {
          isDefault: false
        }
      });
    }

    const account = await this.prisma.account.create({
      data: {
        ...data,
        userId,
        balance: data.balance
      }
    });

    return this.mapAccountToResponse(account);
  }

  async getAccounts(
    userId: string,
    options: {
      type?: AccountType;
      currency?: Currency;
      isDefault?: boolean;
    }
  ): Promise<AccountResponse[]> {
    const { type, currency, isDefault } = options;

    const accounts = await this.prisma.account.findMany({
      where: {
        userId,
        ...(type && { type }),
        ...(currency && { currency }),
        ...(isDefault !== undefined && { isDefault })
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return accounts.map(this.mapAccountToResponse);
  }

  async getAccountById(userId: string, accountId: string): Promise<AccountResponse> {
    const account = await this.prisma.account.findFirst({
      where: {
        id: accountId,
        userId
      }
    });

    if (!account) {
      throw new Error('Account not found');
    }

    return this.mapAccountToResponse(account);
  }

  async updateAccount(userId: string, accountId: string, data: UpdateAccountInput): Promise<AccountResponse> {
    // If setting as default, remove default from other accounts of same currency
    if (data.isDefault) {
      const currentAccount = await this.prisma.account.findFirst({
        where: {
          id: accountId,
          userId
        }
      });

      if (currentAccount) {
        await this.prisma.account.updateMany({
          where: {
            userId,
            currency: currentAccount.currency,
            isDefault: true,
            id: {
              not: accountId
            }
          },
          data: {
            isDefault: false
          }
        });
      }
    }

    const account = await this.prisma.account.findFirst({
      where: {
        id: accountId,
        userId
      }
    });

    if (!account) {
      throw new Error('Account not found');
    }

    const updatedAccount = await this.prisma.account.update({
      where: { id: accountId },
      data
    });

    return this.mapAccountToResponse(updatedAccount);
  }

  async updateBalance(userId: string, accountId: string, data: UpdateBalanceInput): Promise<AccountResponse> {
    const account = await this.prisma.account.findFirst({
      where: {
        id: accountId,
        userId
      }
    });

    if (!account) {
      throw new Error('Account not found');
    }

    const updatedAccount = await this.prisma.account.update({
      where: { id: accountId },
      data: {
        balance: data.balance
      }
    });

    return this.mapAccountToResponse(updatedAccount);
  }

  async deleteAccount(userId: string, accountId: string): Promise<void> {
    const account = await this.prisma.account.findFirst({
      where: {
        id: accountId,
        userId
      }
    });

    if (!account) {
      throw new Error('Account not found');
    }

    await this.prisma.account.delete({
      where: { id: accountId }
    });
  }

  private mapAccountToResponse(account: Account): AccountResponse {
    return {
      id: Number(account.id),
      name: account.name,
      type: account.type as AccountType,
      currency: account.currency as Currency,
      balance: Number(account.balance),
      isDefault: account.isDefault,
      createdAt: account.createdAt,
      updatedAt: account.updatedAt
    };
  }
}

export const accountService = new AccountService(); 