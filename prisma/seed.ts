import { PrismaClient } from '../src/generated/prisma';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Clean up existing data
  await prisma.budgetCategory.deleteMany();
  await prisma.transaction.deleteMany();
  await prisma.budget.deleteMany();
  await prisma.statement.deleteMany();
  await prisma.category.deleteMany();
  await prisma.account.deleteMany();
  await prisma.user.deleteMany();

  // Create test user
  const testUser = await prisma.user.create({
    data: {
      email: 'test@example.com',
      passwordHash: await bcrypt.hash('password123', 10),
      name: 'Test User'
    }
  });

  // Create accounts
  const accounts = await Promise.all([
    prisma.account.create({
      data: {
        userId: testUser.id,
        name: 'Main Checking',
        type: 'CHECKING',
        currency: 'USD',
        balance: 5000.00,
        isDefault: true
      }
    }),
    prisma.account.create({
      data: {
        userId: testUser.id,
        name: 'Euro Savings',
        type: 'SAVINGS',
        currency: 'EUR',
        balance: 3000.00,
        isDefault: false
      }
    }),
    prisma.account.create({
      data: {
        userId: testUser.id,
        name: 'Kenya M-Pesa',
        type: 'WALLET',
        currency: 'KES',
        balance: 25000.00,
        isDefault: false
      }
    })
  ]);

  // Create categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: 'Housing',
        type: 'system',
        keywords: 'rent,mortgage,apartment,housing'
      }
    }),
    prisma.category.create({
      data: {
        name: 'Utilities',
        type: 'system',
        keywords: 'electricity,water,gas,internet'
      }
    }),
    prisma.category.create({
      data: {
        name: 'Groceries',
        type: 'system',
        keywords: 'supermarket,food,grocery'
      }
    }),
    prisma.category.create({
      data: {
        name: 'Transportation',
        type: 'system',
        keywords: 'fuel,bus,taxi,train'
      }
    })
  ]);

  // Create budgets for different currencies
  const budgets = await Promise.all([
    prisma.budget.create({
      data: {
        userId: testUser.id,
        name: 'USD Monthly Budget',
        currency: 'USD',
        totalAmount: 5000,
        periodStart: new Date('2024-02-01'),
        periodEnd: new Date('2024-02-29'),
        categories: {
          create: categories.map(category => ({
            categoryId: category.id,
            amount: 1000
          }))
        }
      }
    }),
    prisma.budget.create({
      data: {
        userId: testUser.id,
        name: 'EUR Monthly Budget',
        currency: 'EUR',
        totalAmount: 3000,
        periodStart: new Date('2024-02-01'),
        periodEnd: new Date('2024-02-29'),
        categories: {
          create: categories.map(category => ({
            categoryId: category.id,
            amount: 600
          }))
        }
      }
    })
  ]);

  // Create sample transactions
  const transactions = await Promise.all([
    // USD Transactions
    prisma.transaction.create({
      data: {
        userId: testUser.id,
        accountId: accounts[0].id,
        date: new Date('2024-02-01'),
        description: 'Monthly Rent',
        amount: 1500,
        type: 'expense',
        categoryId: categories[0].id,
        currency: 'USD'
      }
    }),
    // EUR Transactions
    prisma.transaction.create({
      data: {
        userId: testUser.id,
        accountId: accounts[1].id,
        date: new Date('2024-02-02'),
        description: 'Grocery Shopping',
        amount: 150,
        type: 'expense',
        categoryId: categories[2].id,
        currency: 'EUR'
      }
    }),
    // KES Transactions
    prisma.transaction.create({
      data: {
        userId: testUser.id,
        accountId: accounts[2].id,
        date: new Date('2024-02-03'),
        description: 'M-Pesa Transfer',
        amount: 5000,
        type: 'income',
        currency: 'KES'
      }
    }),
    // Transfer between accounts
    prisma.transaction.create({
      data: {
        userId: testUser.id,
        accountId: accounts[0].id,
        date: new Date('2024-02-04'),
        description: 'Transfer to EUR Savings',
        amount: 1000,
        type: 'transfer',
        currency: 'USD'
      }
    })
  ]);

  console.log('Seed data created successfully:', {
    user: testUser,
    accountsCount: accounts.length,
    categoriesCount: categories.length,
    budgetsCount: budgets.length,
    transactionsCount: transactions.length
  });
}

main()
  .catch((e) => {
    console.error('Error seeding data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 