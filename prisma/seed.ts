import { PrismaClient, MerchantType, PaymentChannel, TransactionFrequency, CategoryType } from '../src/generated/prisma';
import * as bcrypt from 'bcryptjs';
import { Prisma } from '../src/generated/prisma';
import { v4 as uuidv4 } from 'uuid';

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
  const categories = await createCategories();

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
          create: [
            { categoryId: categories.utilities.id, amount: 1000 },
            { categoryId: categories.transport.id, amount: 1000 },
            { categoryId: categories.shopping.id, amount: 1000 },
            { categoryId: categories.entertainment.id, amount: 1000 },
            { categoryId: categories.education.id, amount: 1000 },
            { categoryId: categories.bills.id, amount: 1000 }
          ]
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
          create: [
            { categoryId: categories.utilities.id, amount: 600 },
            { categoryId: categories.transport.id, amount: 600 },
            { categoryId: categories.shopping.id, amount: 600 },
            { categoryId: categories.entertainment.id, amount: 600 },
            { categoryId: categories.education.id, amount: 600 },
            { categoryId: categories.bills.id, amount: 600 }
          ]
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
        categoryId: categories.utilities.id,
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
        categoryId: categories.shopping.id,
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

  // Then create merchant rules
  await createMerchantRules(categories);

  console.log('Seed data created successfully:', {
    user: testUser,
    accountsCount: accounts.length,
    categoriesCount: Object.keys(categories).length,
    budgetsCount: budgets.length,
    transactionsCount: transactions.length
  });
}

async function createCategories() {
  const categories = {
    utilities: {
      id: uuidv4(),
      name: 'Utilities',
      type: CategoryType.system,
      keywords: 'electricity,water,gas,internet,wifi,broadband'
    },
    transport: {
      id: uuidv4(),
      name: 'Transport', 
      type: CategoryType.system,
      keywords: 'fare,taxi,uber,bolt,matatu,bus,train'
    },
    shopping: {
      id: uuidv4(),
      name: 'Shopping',
      type: CategoryType.system,
      keywords: 'supermarket,mall,shop,store,retail,market'
    },
    entertainment: {
      id: uuidv4(),
      name: 'Entertainment',
      type: CategoryType.system,
      keywords: 'movies,cinema,netflix,spotify,dstv,gotv,showmax'
    },
    education: {
      id: uuidv4(),
      name: 'Education',
      type: CategoryType.system,
      keywords: 'school,university,college,fees,tuition'
    },
    bills: {
      id: uuidv4(),
      name: 'Bills & Services',
      type: CategoryType.system,
      keywords: 'bill,service,subscription,insurance'
    },
    food: {
      id: uuidv4(),
      name: 'Food & Dining',
      type: CategoryType.system,
      keywords: 'restaurant,food,dining,cafe,coffee,takeaway'
    }
  };

  for (const category of Object.values(categories)) {
    await prisma.category.upsert({
      where: { id: category.id },
      update: {
        name: category.name,
        type: category.type,
        keywords: category.keywords
      },
      create: {
        id: category.id,
        name: category.name,
        type: category.type,
        keywords: category.keywords
      }
    });
  }

  return categories;
}

async function createMerchantRules(categories: any) {
  // Utilities
  await createUtilityMerchants(categories);
  
  // Transport
  await createTransportMerchants(categories);
  
  // Shopping
  await createShoppingMerchants(categories);
  
  // Entertainment
  await createEntertainmentMerchants(categories);
  
  // Education
  await createEducationMerchants(categories);
}

async function createUtilityMerchants(categories: any) {
  try {
    // KPLC
    const kplcId = uuidv4();
    await prisma.merchantRule.upsert({
      where: { id: kplcId },
      update: {
        merchantType: MerchantType.UTILITY,
        paymentChannels: [PaymentChannel.MPESA, PaymentChannel.BANK_TRANSFER],
        patterns: [
          'KPLC',
          'KENYA\\s*POWER',
          'KP&LC',
          'KENYA\\s*POWER\\s*&\\s*LIGHTING'
        ],
        keywords: ['electricity', 'power', 'token', 'bill', 'prepaid', 'postpaid'],
        mpesaPaybill: '888880',
        categoryId: categories.utilities.id,
        confidence: new Prisma.Decimal(0.95),
        frequency: TransactionFrequency.MONTHLY,
        amountPatterns: JSON.stringify({
          typical: [1000, 2000, 5000],
          range: { min: 100, max: 50000 }
        })
      },
      create: {
        id: kplcId,
        name: 'Kenya Power',
        merchantType: MerchantType.UTILITY,
        paymentChannels: [PaymentChannel.MPESA, PaymentChannel.BANK_TRANSFER],
        patterns: [
          'KPLC',
          'KENYA\\s*POWER',
          'KP&LC',
          'KENYA\\s*POWER\\s*&\\s*LIGHTING'
        ],
        keywords: ['electricity', 'power', 'token', 'bill', 'prepaid', 'postpaid'],
        mpesaPaybill: '888880',
        categoryId: categories.utilities.id,
        confidence: new Prisma.Decimal(0.95),
        frequency: TransactionFrequency.MONTHLY,
        amountPatterns: JSON.stringify({
          typical: [1000, 2000, 5000],
          range: { min: 100, max: 50000 }
        })
      }
    });

    // Nairobi Water
    const nairobiWaterId = uuidv4();
    await prisma.merchantRule.upsert({
      where: { id: nairobiWaterId },
      update: {
        merchantType: MerchantType.UTILITY,
        paymentChannels: [PaymentChannel.MPESA, PaymentChannel.BANK_TRANSFER],
        patterns: [
          'NAIROBI\\s*WATER',
          'NCWSC',
          'NAIROBI\\s*CITY\\s*WATER'
        ],
        keywords: ['water', 'bill', 'utility'],
        mpesaPaybill: '888880',
        categoryId: categories.utilities.id,
        confidence: new Prisma.Decimal(0.95),
        frequency: TransactionFrequency.MONTHLY,
        amountPatterns: JSON.stringify({
          typical: [500, 1000, 2000],
          range: { min: 100, max: 10000 }
        })
      },
      create: {
        id: nairobiWaterId,
        name: 'Nairobi Water',
        merchantType: MerchantType.UTILITY,
        paymentChannels: [PaymentChannel.MPESA, PaymentChannel.BANK_TRANSFER],
        patterns: [
          'NAIROBI\\s*WATER',
          'NCWSC',
          'NAIROBI\\s*CITY\\s*WATER'
        ],
        keywords: ['water', 'bill', 'utility'],
        mpesaPaybill: '888880',
        categoryId: categories.utilities.id,
        confidence: new Prisma.Decimal(0.95),
        frequency: TransactionFrequency.MONTHLY,
        amountPatterns: JSON.stringify({
          typical: [500, 1000, 2000],
          range: { min: 100, max: 10000 }
        })
      }
    });
  } catch (error) {
    console.error('Error creating utility merchants:', error);
    throw error;
  }
}

async function createTransportMerchants(categories: any) {
  try {
    // Uber
    const uberId = uuidv4();
    await prisma.merchantRule.upsert({
      where: { id: uberId },
      update: {
        merchantType: MerchantType.TRANSPORT,
        paymentChannels: [PaymentChannel.CARD_PAYMENT],
        patterns: [
          'UBER\\*',
          'UBER\\s*TRIP',
          'UBER\\s*BV'
        ],
        keywords: ['ride', 'trip', 'taxi'],
        categoryId: categories.transport.id,
        confidence: new Prisma.Decimal(0.95),
        frequency: TransactionFrequency.IRREGULAR,
        amountPatterns: JSON.stringify({
          range: { min: 200, max: 5000 }
        })
      },
      create: {
        id: uberId,
        name: 'Uber',
        merchantType: MerchantType.TRANSPORT,
        paymentChannels: [PaymentChannel.CARD_PAYMENT],
        patterns: [
          'UBER\\*',
          'UBER\\s*TRIP',
          'UBER\\s*BV'
        ],
        keywords: ['ride', 'trip', 'taxi'],
        categoryId: categories.transport.id,
        confidence: new Prisma.Decimal(0.95),
        frequency: TransactionFrequency.IRREGULAR,
        amountPatterns: JSON.stringify({
          range: { min: 200, max: 5000 }
        })
      }
    });
  } catch (error) {
    console.error('Error creating transport merchants:', error);
    throw error;
  }
}

async function createShoppingMerchants(categories: any) {
  try {
    // Naivas
    const naivasId = uuidv4();
    await prisma.merchantRule.upsert({
      where: { id: naivasId },
      update: {
        merchantType: MerchantType.RETAIL,
        paymentChannels: [PaymentChannel.MPESA, PaymentChannel.CARD_PAYMENT],
        patterns: [
          'NAIVAS',
          'NAIVAS\\s*SUPERMARKET',
          'NAIVAS\\s*LTD'
        ],
        keywords: ['supermarket', 'shopping', 'groceries'],
        categoryId: categories.shopping.id,
        confidence: new Prisma.Decimal(0.95),
        frequency: TransactionFrequency.WEEKLY,
        amountPatterns: JSON.stringify({
          range: { min: 100, max: 30000 }
        })
      },
      create: {
        id: naivasId,
        name: 'Naivas',
        merchantType: MerchantType.RETAIL,
        paymentChannels: [PaymentChannel.MPESA, PaymentChannel.CARD_PAYMENT],
        patterns: [
          'NAIVAS',
          'NAIVAS\\s*SUPERMARKET',
          'NAIVAS\\s*LTD'
        ],
        keywords: ['supermarket', 'shopping', 'groceries'],
        categoryId: categories.shopping.id,
        confidence: new Prisma.Decimal(0.95),
        frequency: TransactionFrequency.WEEKLY,
        amountPatterns: JSON.stringify({
          range: { min: 100, max: 30000 }
        })
      }
    });

    // Carrefour
    const carrefourId = uuidv4();
    await prisma.merchantRule.upsert({
      where: { id: carrefourId },
      update: {
        merchantType: MerchantType.RETAIL,
        paymentChannels: [PaymentChannel.CARD_PAYMENT, PaymentChannel.MPESA],
        patterns: [
          'CARREFOUR',
          'MAJID\\s*AL\\s*FUTTAIM'
        ],
        keywords: ['supermarket', 'shopping', 'groceries', 'hypermarket'],
        categoryId: categories.shopping.id,
        confidence: new Prisma.Decimal(0.95),
        frequency: TransactionFrequency.WEEKLY,
        amountPatterns: JSON.stringify({
          range: { min: 100, max: 50000 }
        })
      },
      create: {
        id: carrefourId,
        name: 'Carrefour',
        merchantType: MerchantType.RETAIL,
        paymentChannels: [PaymentChannel.CARD_PAYMENT, PaymentChannel.MPESA],
        patterns: [
          'CARREFOUR',
          'MAJID\\s*AL\\s*FUTTAIM'
        ],
        keywords: ['supermarket', 'shopping', 'groceries', 'hypermarket'],
        categoryId: categories.shopping.id,
        confidence: new Prisma.Decimal(0.95),
        frequency: TransactionFrequency.WEEKLY,
        amountPatterns: JSON.stringify({
          range: { min: 100, max: 50000 }
        })
      }
    });
  } catch (error) {
    console.error('Error creating shopping merchants:', error);
    throw error;
  }
}

async function createEntertainmentMerchants(categories: any) {
  // Netflix
  const netflixId = uuidv4();
  await prisma.merchantRule.upsert({
    where: { id: netflixId },
    update: {
      merchantType: MerchantType.GENERAL,
      paymentChannels: [PaymentChannel.CARD_PAYMENT],
      patterns: [
        'NETFLIX',
        'NETFLIX\\.COM'
      ],
      keywords: ['streaming', 'movies', 'subscription'],
      categoryId: categories.entertainment.id,
      confidence: new Prisma.Decimal(0.95),
      frequency: TransactionFrequency.MONTHLY,
      amountPatterns: JSON.stringify({
        typical: [1100, 1450],
        range: { min: 1000, max: 2000 }
      })
    },
    create: {
      id: netflixId,
      name: 'Netflix',
      merchantType: MerchantType.GENERAL,
      paymentChannels: [PaymentChannel.CARD_PAYMENT],
      patterns: [
        'NETFLIX',
        'NETFLIX\\.COM'
      ],
      keywords: ['streaming', 'movies', 'subscription'],
      categoryId: categories.entertainment.id,
      confidence: new Prisma.Decimal(0.95),
      frequency: TransactionFrequency.MONTHLY,
      amountPatterns: JSON.stringify({
        typical: [1100, 1450],
        range: { min: 1000, max: 2000 }
      })
    }
  });

  // DSTV
  const dstvId = uuidv4();
  await prisma.merchantRule.upsert({
    where: { id: dstvId },
    update: {
      merchantType: MerchantType.GENERAL,
      paymentChannels: [PaymentChannel.MPESA],
      patterns: [
        'DSTV',
        'MULTICHOICE',
        'GOTV'
      ],
      keywords: ['tv', 'subscription', 'entertainment'],
      mpesaPaybill: '333222',
      categoryId: categories.entertainment.id,
      confidence: new Prisma.Decimal(0.95),
      frequency: TransactionFrequency.MONTHLY,
      amountPatterns: JSON.stringify({
        typical: [899, 1499, 2499, 7499],
        range: { min: 500, max: 10000 }
      })
    },
    create: {
      id: dstvId,
      name: 'DSTV',
      merchantType: MerchantType.GENERAL,
      paymentChannels: [PaymentChannel.MPESA],
      patterns: [
        'DSTV',
        'MULTICHOICE',
        'GOTV'
      ],
      keywords: ['tv', 'subscription', 'entertainment'],
      mpesaPaybill: '333222',
      categoryId: categories.entertainment.id,
      confidence: new Prisma.Decimal(0.95),
      frequency: TransactionFrequency.MONTHLY,
      amountPatterns: JSON.stringify({
        typical: [899, 1499, 2499, 7499],
        range: { min: 500, max: 10000 }
      })
    }
  });
}

async function createEducationMerchants(categories: any) {
  // Common School Fee Pattern
  const schoolFeesId = uuidv4();
  await prisma.merchantRule.upsert({
    where: { id: schoolFeesId },
    update: {
      merchantType: MerchantType.EDUCATION,
      paymentChannels: [PaymentChannel.BANK_TRANSFER, PaymentChannel.MPESA],
      patterns: [
        'SCHOOL\\s*FEES',
        'COLLEGE\\s*FEES',
        'UNIVERSITY\\s*FEES',
        'TUITION'
      ],
      keywords: ['school', 'fees', 'tuition', 'education'],
      categoryId: categories.education.id,
      confidence: new Prisma.Decimal(0.85),
      frequency: TransactionFrequency.QUARTERLY,
      amountPatterns: JSON.stringify({
        range: { min: 5000, max: 200000 }
      })
    },
    create: {
      id: schoolFeesId,
      name: 'School Fees',
      merchantType: MerchantType.EDUCATION,
      paymentChannels: [PaymentChannel.BANK_TRANSFER, PaymentChannel.MPESA],
      patterns: [
        'SCHOOL\\s*FEES',
        'COLLEGE\\s*FEES',
        'UNIVERSITY\\s*FEES',
        'TUITION'
      ],
      keywords: ['school', 'fees', 'tuition', 'education'],
      categoryId: categories.education.id,
      confidence: new Prisma.Decimal(0.85),
      frequency: TransactionFrequency.QUARTERLY,
      amountPatterns: JSON.stringify({
        range: { min: 5000, max: 200000 }
      })
    }
  });
}

main()
  .catch((e) => {
    console.error('Error seeding data:', e);
    process.exit(1);
  })
  .finally(async () => {
    try {
      await prisma.$disconnect();
    } catch (error) {
      console.error('Error disconnecting from database:', error);
      process.exit(1);
    }
  }); 