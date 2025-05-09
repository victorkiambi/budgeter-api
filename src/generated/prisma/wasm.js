
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  passwordHash: 'passwordHash',
  name: 'name',
  createdAt: 'createdAt'
};

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  name: 'name',
  type: 'type',
  currency: 'currency',
  balance: 'balance',
  isDefault: 'isDefault',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StatementScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  accountId: 'accountId',
  filename: 'filename',
  fileType: 'fileType',
  uploadedAt: 'uploadedAt',
  processedAt: 'processedAt'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  keywords: 'keywords'
};

exports.Prisma.TransactionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  accountId: 'accountId',
  statementId: 'statementId',
  date: 'date',
  description: 'description',
  amount: 'amount',
  type: 'type',
  categoryId: 'categoryId',
  currency: 'currency',
  createdAt: 'createdAt',
  paymentChannel: 'paymentChannel',
  merchantName: 'merchantName',
  mpesaPaybill: 'mpesaPaybill',
  mpesaTill: 'mpesaTill',
  mpesaReference: 'mpesaReference'
};

exports.Prisma.BudgetScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  name: 'name',
  currency: 'currency',
  totalAmount: 'totalAmount',
  periodStart: 'periodStart',
  periodEnd: 'periodEnd',
  createdAt: 'createdAt'
};

exports.Prisma.BudgetCategoryScalarFieldEnum = {
  budgetId: 'budgetId',
  categoryId: 'categoryId',
  amount: 'amount'
};

exports.Prisma.MerchantRuleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  merchantType: 'merchantType',
  paymentChannels: 'paymentChannels',
  patterns: 'patterns',
  keywords: 'keywords',
  mpesaPaybill: 'mpesaPaybill',
  mpesaTill: 'mpesaTill',
  mpesaReference: 'mpesaReference',
  categoryId: 'categoryId',
  confidence: 'confidence',
  isActive: 'isActive',
  amountPatterns: 'amountPatterns',
  frequency: 'frequency',
  metadata: 'metadata',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TransactionMatchScalarFieldEnum = {
  id: 'id',
  transactionId: 'transactionId',
  ruleId: 'ruleId',
  confidence: 'confidence',
  matchMethod: 'matchMethod',
  paymentChannel: 'paymentChannel',
  mpesaPaybill: 'mpesaPaybill',
  mpesaTill: 'mpesaTill',
  mpesaReference: 'mpesaReference',
  wasCorrect: 'wasCorrect',
  correctedCategoryId: 'correctedCategoryId',
  metadata: 'metadata',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.AccountType = exports.$Enums.AccountType = {
  CHECKING: 'CHECKING',
  SAVINGS: 'SAVINGS',
  CREDIT_CARD: 'CREDIT_CARD',
  INVESTMENT: 'INVESTMENT',
  LOAN: 'LOAN',
  WALLET: 'WALLET'
};

exports.Currency = exports.$Enums.Currency = {
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
  KES: 'KES'
};

exports.FileType = exports.$Enums.FileType = {
  csv: 'csv',
  pdf: 'pdf'
};

exports.CategoryType = exports.$Enums.CategoryType = {
  system: 'system',
  user: 'user'
};

exports.TransactionType = exports.$Enums.TransactionType = {
  income: 'income',
  expense: 'expense',
  transfer: 'transfer'
};

exports.PaymentChannel = exports.$Enums.PaymentChannel = {
  MPESA: 'MPESA',
  BANK_TRANSFER: 'BANK_TRANSFER',
  CARD_PAYMENT: 'CARD_PAYMENT',
  CASH: 'CASH',
  CHEQUE: 'CHEQUE',
  MOBILE_BANKING: 'MOBILE_BANKING',
  AGENCY_BANKING: 'AGENCY_BANKING'
};

exports.MerchantType = exports.$Enums.MerchantType = {
  MPESA_PAYBILL: 'MPESA_PAYBILL',
  MPESA_TILL: 'MPESA_TILL',
  MPESA_SEND: 'MPESA_SEND',
  BANK: 'BANK',
  RETAIL: 'RETAIL',
  UTILITY: 'UTILITY',
  TELCO: 'TELCO',
  GOVERNMENT: 'GOVERNMENT',
  EDUCATION: 'EDUCATION',
  TRANSPORT: 'TRANSPORT',
  FOOD_BEVERAGE: 'FOOD_BEVERAGE',
  GENERAL: 'GENERAL'
};

exports.TransactionFrequency = exports.$Enums.TransactionFrequency = {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  QUARTERLY: 'QUARTERLY',
  ANNUAL: 'ANNUAL',
  IRREGULAR: 'IRREGULAR'
};

exports.MatchMethod = exports.$Enums.MatchMethod = {
  EXACT_MATCH: 'EXACT_MATCH',
  PATTERN_MATCH: 'PATTERN_MATCH',
  KEYWORD_MATCH: 'KEYWORD_MATCH',
  MPESA_PAYBILL: 'MPESA_PAYBILL',
  MPESA_TILL: 'MPESA_TILL',
  AMOUNT_PATTERN: 'AMOUNT_PATTERN',
  MANUAL: 'MANUAL',
  FALLBACK: 'FALLBACK'
};

exports.Prisma.ModelName = {
  User: 'User',
  Account: 'Account',
  Statement: 'Statement',
  Category: 'Category',
  Transaction: 'Transaction',
  Budget: 'Budget',
  BudgetCategory: 'BudgetCategory',
  MerchantRule: 'MerchantRule',
  TransactionMatch: 'TransactionMatch'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
