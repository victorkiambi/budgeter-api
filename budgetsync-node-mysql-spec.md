# BudgetSync Technical Specification
## Node.js, TypeScript & MySQL Architecture

## 1. System Architecture

BudgetSync will use a simple three-tier architecture:

```
┌─────────────────┐
│  Mobile Client  │
│  (React Native) │
└────────┬────────┘
         │
         │ HTTP/REST
         ▼
┌─────────────────┐
│  Node.js API    │
│  (TypeScript)   │
└────────┬────────┘
         │
         │ SQL Queries
         ▼
┌─────────────────┐
│  MySQL Database │
└─────────────────┘
```

### Components:

1. **API Server (Node.js + TypeScript)**
   - Express.js framework
   - TypeScript for type safety
   - JWT authentication
   - File upload handling
   - Transaction categorization
   - Data retrieval and analysis

2. **Database (MySQL)**
   - Relational data model
   - Structured financial data storage
   - Transaction support
   - Indexing for efficient queries

## 2. Technology Stack

### Backend
- **Runtime**: Node.js (LTS version)
- **Language**: TypeScript 5.x
- **Framework**: Express.js
- **ORM**: Prisma
- **Authentication**: JSON Web Tokens (JWT)
- **File Processing**:
  - CSV: `csv-parser` or `fast-csv`
  - PDF: `pdf-parse` or `pdf.js-extract`
- **Validation**: Joi or class-validator
- **Testing**: Jest + SuperTest

### Database
- **MySQL** 8.x
- Connection pooling
- Prepared statements for security

### Deployment
- **Hosting Options**:
  - Backend: Render, Railway, or Fly.io (free tiers)
  - Database: PlanetScale or Clever Cloud free tier
- **Environment**: Docker containers (optional)

## 3. Database Schema

### Entity-Relationship Diagram

```
┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│    users     │       │   budgets    │       │  categories  │
├──────────────┤       ├──────────────┤       ├──────────────┤
│ id           │       │ id           │       │ id           │
│ email        │       │ user_id      │┼─────►│ name         │
│ password_hash│       │ name         │       │ type         │
│ name         │       │ total_amount │       │ keywords     │
│ created_at   │       │ period_start │       └──────┬───────┘
└──────┬───────┘       │ period_end   │              │
       │               └──────┬───────┘              │
       │                      │                      │
       ▼                      │                      │
┌──────────────┐       ┌──────┴───────┐       ┌──────┴───────┐
│  statements  │       │ transactions │       │budget_category│
├──────────────┤       ├──────────────┤       ├──────────────┤
│ id           │       │ id           │       │ budget_id    │
│ user_id      │┼─────►│ user_id      │       │ category_id  │
│ filename     │       │ statement_id │◄──────┤ amount       │
│ file_type    │       │ date         │       └──────────────┘
│ uploaded_at  │       │ description  │
│ processed_at │       │ amount       │
└──────────────┘       │ type         │
                       │ category_id  │
                       │ created_at   │
                       └──────────────┘
```

### MySQL Table Definitions

#### `users` Table
```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_email (email)
);
```

#### `statements` Table
```sql
CREATE TABLE statements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    filename VARCHAR(255) NOT NULL,
    file_type ENUM('csv', 'pdf') NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    processed_at TIMESTAMP NULL,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id)
);
```

#### `categories` Table
```sql
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type ENUM('system', 'user') DEFAULT 'system',
    keywords TEXT,
    
    INDEX idx_name (name)
);
```

#### `budgets` Table
```sql
CREATE TABLE budgets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    period_start DATE NOT NULL,
    period_end DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_period (period_start, period_end)
);
```

#### `budget_category` Table
```sql
CREATE TABLE budget_category (
    budget_id INT NOT NULL,
    category_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    
    PRIMARY KEY (budget_id, category_id),
    FOREIGN KEY (budget_id) REFERENCES budgets(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);
```

#### `transactions` Table
```sql
CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    statement_id INT,
    date DATE NOT NULL,
    description TEXT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    type ENUM('income', 'expense') NOT NULL,
    category_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (statement_id) REFERENCES statements(id) ON DELETE SET NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL,
    
    INDEX idx_user_id (user_id),
    INDEX idx_date (date),
    INDEX idx_category (category_id),
    INDEX idx_statement (statement_id)
);
```

## 4. API Architecture

### Express Application Structure

```
src/
├── config/                 # Configuration files
│   ├── database.ts         # Database connection config
│   └── auth.ts             # Authentication config
├── controllers/            # Route handlers
│   ├── auth.controller.ts
│   ├── transaction.controller.ts
│   ├── statement.controller.ts
│   ├── budget.controller.ts
│   └── analysis.controller.ts
├── models/                 # Type definitions and ORM models
│   ├── User.ts
│   ├── Statement.ts
│   ├── Transaction.ts
│   ├── Category.ts
│   └── Budget.ts
├── services/               # Business logic
│   ├── auth.service.ts
│   ├── statement.service.ts
│   ├── categorization.service.ts
│   └── analysis.service.ts
├── routes/                 # API route definitions
│   ├── auth.routes.ts
│   ├── transactions.routes.ts
│   ├── statements.routes.ts
│   ├── budgets.routes.ts
│   └── analysis.routes.ts
├── middleware/             # Middleware functions
│   ├── auth.middleware.ts
│   ├── error.middleware.ts
│   └── upload.middleware.ts
├── utils/                  # Utility functions
│   ├── csv-parser.ts
│   ├── pdf-parser.ts
│   └── categorization.ts
├── types/                  # TypeScript type definitions
│   ├── express.d.ts
│   └── entities.d.ts
├── app.ts                  # Express app setup
└── server.ts               # Server entry point
```

### API Endpoints

#### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile

#### Statements
- `POST /api/statements/upload` - Upload a statement file
- `GET /api/statements` - List user's statements
- `GET /api/statements/:id` - Get statement details

#### Transactions
- `GET /api/transactions` - Get user's transactions with filtering
- `PUT /api/transactions/:id` - Update transaction (e.g., category)
- `DELETE /api/transactions/:id` - Delete transaction

#### Budgets
- `POST /api/budgets` - Create a new budget
- `GET /api/budgets` - List user's budgets
- `GET /api/budgets/:id` - Get budget details
- `PUT /api/budgets/:id` - Update budget
- `DELETE /api/budgets/:id` - Delete budget

#### Analysis
- `GET /api/analysis/summary` - Get spending summary
- `GET /api/analysis/by-category` - Get breakdown by category
- `GET /api/analysis/trends` - Get spending trends

## 5. TypeScript Models

### Core Entity Types

```typescript
// User entity
interface User {
  id: number;
  email: string;
  passwordHash: string;
  name: string | null;
  createdAt: Date;
}

// Statement entity
interface Statement {
  id: number;
  userId: number;
  filename: string;
  fileType: 'csv' | 'pdf';
  uploadedAt: Date;
  processedAt: Date | null;
}

// Category entity
interface Category {
  id: number;
  name: string;
  type: 'system' | 'user';
  keywords: string | null;
}

// Transaction entity
interface Transaction {
  id: number;
  userId: number;
  statementId: number | null;
  date: Date;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  categoryId: number | null;
  createdAt: Date;
}

// Budget entity
interface Budget {
  id: number;
  userId: number;
  name: string;
  totalAmount: number;
  periodStart: Date;
  periodEnd: Date;
  createdAt: Date;
  categories?: BudgetCategory[];
}

// Budget category allocation
interface BudgetCategory {
  budgetId: number;
  categoryId: number;
  amount: number;
}
```

### Request/Response Types

```typescript
// Statement upload request
interface UploadStatementRequest {
  file: Express.Multer.File;
}

// Transaction list request
interface GetTransactionsRequest {
  startDate?: string;
  endDate?: string;
  categoryId?: number;
  minAmount?: number;
  maxAmount?: number;
  search?: string;
  page?: number;
  limit?: number;
}

// Transaction list response
interface GetTransactionsResponse {
  transactions: Transaction[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
}

// Analysis summary response
interface AnalysisSummaryResponse {
  totalIncome: number;
  totalExpenses: number;
  netSavings: number;
  topCategories: {
    categoryId: number;
    name: string;
    amount: number;
    percentage: number;
  }[];
  periodStart: Date;
  periodEnd: Date;
}
```

## 6. File Processing Architecture

### CSV Processing Flow

1. User uploads CSV file
2. Express multer middleware handles file upload
3. File is saved temporarily
4. CSV parser extracts data rows
5. System identifies headers and maps to transaction fields
6. For each transaction:
   - Date is normalized to standard format
   - Amount is extracted and normalized
   - Description is cleaned
   - Type (income/expense) is determined
   - Category is assigned using keyword matching
7. Transactions are saved to database
8. Statement record is marked as processed

### PDF Processing Flow

1. User uploads PDF file
2. Express multer middleware handles file upload
3. File is saved temporarily
4. PDF parser extracts text content
5. Text content is analyzed to identify statement type (bank-specific)
6. Regex patterns extract transaction data
7. For each transaction:
   - Data is normalized and cleaned
   - Category is assigned
8. Transactions are saved to database
9. Statement record is marked as processed

## 7. Transaction Categorization Logic

### Rule-Based Categorization

The system will use a simple keyword-based approach:

1. Maintain list of categories with associated keywords
2. For each transaction description:
   - Convert to lowercase
   - Remove special characters
   - Compare against each category's keywords
   - Assign the category with the most matching keywords
   - If no match, assign "Uncategorized"

```typescript
// Example category keywords
const categoryKeywords = [
  {
    id: 1,
    name: "Housing",
    keywords: ["rent", "mortgage", "apartment", "housing", "accommodation"]
  },
  {
    id: 2,
    name: "Utilities",
    keywords: ["electricity", "water", "gas", "internet", "wifi", "safaricom", "power"]
  },
  {
    id: 3,
    name: "Groceries",
    keywords: ["grocery", "supermarket", "food", "market", "naivas", "carrefour"]
  },
  // More categories...
];
```

## 8. Search and Filtering Implementation

### Efficient SQL Queries

For transaction filtering:

```sql
SELECT t.*, c.name as category_name
FROM transactions t
LEFT JOIN categories c ON t.category_id = c.id
WHERE 
  t.user_id = ?
  AND (? IS NULL OR t.date >= ?)
  AND (? IS NULL OR t.date <= ?)
  AND (? IS NULL OR t.category_id = ?)
  AND (? IS NULL OR t.amount >= ?)
  AND (? IS NULL OR t.amount <= ?)
  AND (? IS NULL OR t.description LIKE CONCAT('%', ?, '%'))
ORDER BY t.date DESC
LIMIT ? OFFSET ?
```

### TypeORM Query Builder Example

```typescript
const getTransactions = async (
  userId: number,
  filters: GetTransactionsRequest
): Promise<GetTransactionsResponse> => {
  const { 
    startDate, endDate, categoryId, minAmount, 
    maxAmount, search, page = 1, limit = 50 
  } = filters;
  
  const queryBuilder = getRepository(Transaction)
    .createQueryBuilder('transaction')
    .leftJoinAndSelect('transaction.category', 'category')
    .where('transaction.userId = :userId', { userId });
  
  // Apply filters
  if (startDate) {
    queryBuilder.andWhere('transaction.date >= :startDate', { startDate });
  }
  
  if (endDate) {
    queryBuilder.andWhere('transaction.date <= :endDate', { endDate });
  }
  
  if (categoryId) {
    queryBuilder.andWhere('transaction.categoryId = :categoryId', { categoryId });
  }
  
  if (minAmount !== undefined) {
    queryBuilder.andWhere('transaction.amount >= :minAmount', { minAmount });
  }
  
  if (maxAmount !== undefined) {
    queryBuilder.andWhere('transaction.amount <= :maxAmount', { maxAmount });
  }
  
  if (search) {
    queryBuilder.andWhere('transaction.description LIKE :search', { search: `%${search}%` });
  }
  
  // Count total for pagination
  const total = await queryBuilder.getCount();
  
  // Apply pagination
  const skip = (page - 1) * limit;
  queryBuilder.orderBy('transaction.date', 'DESC').skip(skip).take(limit);
  
  // Execute query
  const transactions = await queryBuilder.getMany();
  
  return {
    transactions,
    pagination: {
      total,
      page,
      limit,
      pages: Math.ceil(total / limit)
    }
  };
};
```

## 9. Security Considerations

### Authentication & Authorization

- JWT tokens with appropriate expiration
- Password hashing using bcrypt
- Protected routes using middleware
- CSRF protection for production

### Data Protection

- Prepared statements to prevent SQL injection
- Input validation using Joi/class-validator
- File type validation for uploads
- Rate limiting for API endpoints

### Example Auth Middleware

```typescript
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/auth';

interface TokenPayload {
  userId: number;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload;
    }
  }
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ message: 'Authentication required' });
  }
  
  const token = authHeader.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, config.jwtSecret) as TokenPayload;
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
```

## 10. Analysis Features

### Spending Summary

```sql
-- Get category spending for a time period
SELECT 
  c.id,
  c.name,
  SUM(t.amount) as total,
  COUNT(t.id) as transaction_count
FROM transactions t
JOIN categories c ON t.category_id = c.id
WHERE 
  t.user_id = ?
  AND t.date BETWEEN ? AND ?
  AND t.type = 'expense'
GROUP BY c.id, c.name
ORDER BY total DESC
```

### Budget Progress

```sql
-- Get budget progress
SELECT 
  bc.category_id,
  c.name,
  bc.amount as budgeted,
  COALESCE(SUM(t.amount), 0) as spent,
  bc.amount - COALESCE(SUM(t.amount), 0) as remaining,
  (COALESCE(SUM(t.amount), 0) / bc.amount) * 100 as percentage
FROM budget_category bc
JOIN categories c ON bc.category_id = c.id
LEFT JOIN transactions t ON 
  t.category_id = bc.category_id
  AND t.user_id = ?
  AND t.date BETWEEN ? AND ?
  AND t.type = 'expense'
WHERE bc.budget_id = ?
GROUP BY bc.category_id, c.name, bc.amount
```

## 11. Performance Considerations

### Database Indexing

The schema includes appropriate indexes on:
- User ID (for filtering user data)
- Date fields (for time-based queries)
- Category ID (for category filtering)
- Statement ID (for statement filtering)

### Query Optimization

- Use pagination for large result sets
- Select only needed columns when appropriate
- Use prepared statements for security and performance
- Use JOINs efficiently

### Connection Pooling

```typescript
// Example database connection with pooling
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
```

## 12. Deployment Recommendations

### Database Setup

1. **PlanetScale** (MySQL-compatible)
   - Free tier with 5GB storage
   - No server management required
   - Built-in connection pooling

2. **Clever Cloud** MySQL
   - Free tier available
   - European hosting options

### API Hosting

1. **Render**
   - Free tier with 512MB RAM
   - Auto-deploys from GitHub
   - Sleep after inactivity (good for development)

2. **Railway**
   - Free tier with usage limits
   - Easy deployment from GitHub
   - Built-in logging

### Environment Variables

Essential environment variables to configure:
- `DB_HOST` - Database hostname
- `DB_USER` - Database username
- `DB_PASSWORD` - Database password
- `DB_NAME` - Database name
- `JWT_SECRET` - Secret for JWT signing
- `PORT` - API server port (default 3000)
- `NODE_ENV` - Environment (development/production)

## 13. Implementation Phases

### Phase 1: Core Infrastructure
**Database & Authentication Setup**
- Project initialization with TypeScript and Express
- Prisma schema definition and migrations
- Basic user model and authentication
- JWT middleware implementation
- Environment configuration

**Key Features:**
- User registration and login
- JWT token management
- Password hashing and security
- Basic error handling middleware

### Phase 2: Transaction Management
**Basic Transaction Handling**
- Transaction model implementation
- Manual transaction entry
- Transaction listing with pagination
- Basic filtering and sorting

**File Processing**
- File upload infrastructure
- CSV parsing and processing
- PDF parsing and processing
- Transaction extraction and normalization

### Phase 3: Categorization System
**Category Management**
- Category model and relationships
- System categories setup
- User-defined categories
- Category CRUD operations

**Smart Categorization**
- Keyword-based categorization
- Transaction auto-categorization
- Category suggestion system
- Bulk categorization tools

### Phase 4: Budget Management
**Budget Setup**
- Budget model implementation
- Budget period management
- Category-wise budget allocation
- Budget vs actual tracking

**Budget Analysis**
- Period-wise budget analysis
- Category-wise spending breakdown
- Budget alerts and notifications
- Remaining budget calculations

### Phase 5: Analysis & Reporting
**Financial Analysis**
- Spending patterns analysis
- Income vs expense tracking
- Category-wise analysis
- Time-based trend analysis

**Reporting System**
- Custom report generation
- Export functionality
- Data visualization endpoints
- Summary statistics

### Phase 6: Advanced Features
**Enhanced Processing**
- Bank statement template matching
- Smart date parsing
- Duplicate detection
- Transaction reconciliation

**User Experience**
- Advanced search functionality
- Bulk operations
- Data import/export
- API documentation

### Phase 7: Optimization & Scale
**Performance**
- Query optimization
- Caching implementation
- Background job processing
- API rate limiting

**Monitoring & Maintenance**
- Error tracking
- Performance monitoring
- Automated backups
- Security auditing

Each phase builds upon the previous ones, creating a progressively more sophisticated system. Features within each phase can be prioritized based on user needs and development resources.

## 14. Prisma Schema

```prisma
// This is your Prisma schema file

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id            Int           @id @default(autoincrement())
  email         String        @unique
  passwordHash  String
  name          String?
  createdAt     DateTime      @default(now())
  statements    Statement[]
  transactions  Transaction[]
  budgets       Budget[]

  @@index([email])
}

model Statement {
  id           Int          @id @default(autoincrement())
  userId       Int
  filename     String
  fileType     FileType
  uploadedAt   DateTime     @default(now())
  processedAt  DateTime?
  user         User         @relation(fields: [userId], references: [id], onDelete: Cascade)
  transactions Transaction[]

  @@index([userId])
}

model Category {
  id              Int               @id @default(autoincrement())
  name            String
  type            CategoryType      @default(system)
  keywords        String?
  transactions    Transaction[]
  budgetCategory  BudgetCategory[]

  @@index([name])
}

model Transaction {
  id           Int        @id @default(autoincrement())
  userId       Int
  statementId  Int?
  date         DateTime
  description  String     @db.Text
  amount       Decimal    @db.Decimal(10, 2)
  type         TransactionType
  categoryId   Int?
  createdAt    DateTime   @default(now())
  user         User       @relation(fields: [userId], references: [id], onDelete: Cascade)
  statement    Statement? @relation(fields: [statementId], references: [id], onDelete: SetNull)
  category     Category?  @relation(fields: [categoryId], references: [id], onDelete: SetNull)

  @@index([userId])
  @@index([date])
  @@index([categoryId])
  @@index([statementId])
}

model Budget {
  id            Int              @id @default(autoincrement())
  userId        Int
  name          String
  totalAmount   Decimal         @db.Decimal(10, 2)
  periodStart   DateTime
  periodEnd     DateTime
  createdAt     DateTime        @default(now())
  user          User            @relation(fields: [userId], references: [id], onDelete: Cascade)
  categories    BudgetCategory[]

  @@index([userId])
  @@index([periodStart, periodEnd])
}

model BudgetCategory {
  budgetId    Int
  categoryId  Int
  amount      Decimal    @db.Decimal(10, 2)
  budget      Budget     @relation(fields: [budgetId], references: [id], onDelete: Cascade)
  category    Category   @relation(fields: [categoryId], references: [id], onDelete: Cascade)

  @@id([budgetId, categoryId])
}

enum FileType {
  csv
  pdf
}

enum CategoryType {
  system
  user
}

enum TransactionType {
  income
  expense
}
```
