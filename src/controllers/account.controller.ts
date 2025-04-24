import { Request, Response } from 'express';
import { CreateAccountInput, UpdateAccountInput, UpdateBalanceInput, AccountQueryParams } from '../types/account.types';
import { prisma } from '../lib/prisma';

export const accountController = {
  // Create a new account
  async createAccount(req: Request<{}, {}, CreateAccountInput>, res: Response) {
    try {
      const userId = req.user?.userId;
      const accountData = req.body;

      // If this is set as default, unset any existing default account for this currency
      if (accountData.isDefault) {
        await prisma.account.updateMany({
          where: {
            userId,
            currency: accountData.currency,
            isDefault: true,
          },
          data: {
            isDefault: false,
          },
        });
      }

      const account = await prisma.account.create({
        data: {
          ...accountData,
          userId,
        },
      });

      return res.status(201).json(account);
    } catch (error) {
      console.error('Error creating account:', error);
      return res.status(500).json({ message: 'Failed to create account' });
    }
  },

  // Get all accounts for the authenticated user
  async getAccounts(req: Request<{}, {}, {}, AccountQueryParams>, res: Response) {
    try {
      const userId = req.user?.userId;
      const { type, currency, isDefault } = req.query;

      const accounts = await prisma.account.findMany({
        where: {
          userId,
          ...(type && { type }),
          ...(currency && { currency }),
          ...(isDefault !== undefined && { isDefault }),
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      return res.json(accounts);
    } catch (error) {
      console.error('Error fetching accounts:', error);
      return res.status(500).json({ message: 'Failed to fetch accounts' });
    }
  },

  // Get a specific account by ID
  async getAccountById(req: Request<{ id: string }>, res: Response) {
    try {
      const { id } = req.params;
      const userId = req.user?.userId;

      const account = await prisma.account.findFirst({
        where: {
          id,
          userId,
        },
      });

      if (!account) {
        return res.status(404).json({ message: 'Account not found' });
      }

      return res.json(account);
    } catch (error) {
      console.error('Error fetching account:', error);
      return res.status(500).json({ message: 'Failed to fetch account' });
    }
  },

  // Update an account
  async updateAccount(
    req: Request<{ id: string }, {}, UpdateAccountInput>,
    res: Response
  ) {
    try {
      const { id } = req.params;
      const userId = req.user?.userId;
      const updateData = req.body;

      // If updating isDefault to true, unset any existing default account for this currency
      if (updateData.isDefault) {
        const currentAccount = await prisma.account.findFirst({
          where: { id, userId },
        });

        if (currentAccount) {
          await prisma.account.updateMany({
            where: {
              userId,
              currency: currentAccount.currency,
              isDefault: true,
            },
            data: {
              isDefault: false,
            },
          });
        }
      }

      const account = await prisma.account.update({
        where: {
          id,
          userId,
        },
        data: updateData,
      });

      return res.json(account);
    } catch (error) {
      console.error('Error updating account:', error);
      return res.status(500).json({ message: 'Failed to update account' });
    }
  },

  // Update account balance
  async updateBalance(
    req: Request<{ id: string }, {}, UpdateBalanceInput>,
    res: Response
  ) {
    try {
      const { id } = req.params;
      const userId = req.user?.userId;
      const { balance } = req.body;

      const account = await prisma.account.update({
        where: {
          id,
          userId,
        },
        data: {
          balance,
        },
      });

      return res.json(account);
    } catch (error) {
      console.error('Error updating account balance:', error);
      return res.status(500).json({ message: 'Failed to update account balance' });
    }
  },

  // Delete an account
  async deleteAccount(req: Request<{ id: string }>, res: Response) {
    try {
      const { id } = req.params;
      const userId = req.user?.userId;

      await prisma.account.delete({
        where: {
          id,
          userId,
        },
      });

      return res.status(204).send();
    } catch (error) {
      console.error('Error deleting account:', error);
      return res.status(500).json({ message: 'Failed to delete account' });
    }
  },
}; 