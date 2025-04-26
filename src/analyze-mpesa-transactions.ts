import { processPDFFile } from './utils/pdf-parser';
import * as fs from 'fs';
import * as path from 'path';

async function analyzeMpesaTransactions() {
  try {
    console.log('Starting M-PESA transaction analysis...');
    
    // Read the M-PESA PDF file
    const pdfPath = path.resolve('test/fixtures/bank-statements/M-PESA-sample.pdf');
    const transactions = await processPDFFile(fs.readFileSync(pdfPath), 'mpesa');
    
    console.log(`\nAnalyzing ${transactions.length} transactions from M-PESA statement`);
    
    // 1. Group transactions by merchant
    const merchantSummary: Record<string, { count: number, total: number }> = {};
    transactions.forEach(transaction => {
      if (!transaction.merchant) return;
      
      const merchant = transaction.merchant;
      if (!merchantSummary[merchant]) {
        merchantSummary[merchant] = { count: 0, total: 0 };
      }
      
      merchantSummary[merchant].count += 1;
      merchantSummary[merchant].total += transaction.amount;
    });
    
    // Sort merchants by total amount
    const sortedMerchants = Object.entries(merchantSummary)
      .sort((a, b) => b[1].total - a[1].total)
      .slice(0, 10); // Top 10 merchants
    
    console.log('\nTop 10 Merchants by Total Amount:');
    sortedMerchants.forEach(([merchant, data], index) => {
      console.log(`${index + 1}. ${merchant}: ${data.count} transactions, total KES ${data.total.toFixed(2)}`);
    });
    
    // 2. Group by transaction type
    const typeSummary: Record<string, { count: number, total: number }> = {};
    transactions.forEach(transaction => {
      // Extract the transaction category from the description
      let category = 'Other';
      
      if (transaction.description.includes('Pay Bill')) {
        category = 'Pay Bill';
      } else if (transaction.description.includes('Customer Transfer')) {
        if (transaction.description.includes('Charge')) {
          category = 'Transfer Charges';
        } else {
          category = 'Customer Transfer';
        }
      } else if (transaction.description.includes('Merchant Payment')) {
        category = 'Merchant Payment';
      } else if (transaction.description.includes('Business Payment')) {
        category = 'Business Payment';
      } else if (transaction.description.includes('Airtime')) {
        category = 'Airtime Purchase';
      } else if (transaction.description.includes('OD Loan')) {
        category = 'Loan Repayment';
      } else if (transaction.description.includes('Funds received')) {
        category = 'Funds Received';
      }
      
      if (!typeSummary[category]) {
        typeSummary[category] = { count: 0, total: 0 };
      }
      
      typeSummary[category].count += 1;
      typeSummary[category].total += transaction.amount;
    });
    
    // Sort categories by total amount
    const sortedCategories = Object.entries(typeSummary)
      .sort((a, b) => b[1].total - a[1].total);
    
    console.log('\nTransaction Categories by Total Amount:');
    sortedCategories.forEach(([category, data]) => {
      console.log(`${category}: ${data.count} transactions, total KES ${data.total.toFixed(2)}`);
    });
    
    // 3. Income vs. Expense Analysis
    const incomeTotal = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const expenseTotal = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
    
    console.log('\nIncome vs Expense Summary:');
    console.log(`Total Income: KES ${incomeTotal.toFixed(2)}`);
    console.log(`Total Expense: KES ${expenseTotal.toFixed(2)}`);
    console.log(`Net Balance: KES ${(incomeTotal - expenseTotal).toFixed(2)}`);
    
    // 4. Time-based Analysis
    const transactionsByDate: Record<string, { count: number, income: number, expense: number }> = {};
    
    transactions.forEach(transaction => {
      const date = transaction.timestamp.toISOString().split('T')[0]; // YYYY-MM-DD
      
      if (!transactionsByDate[date]) {
        transactionsByDate[date] = { count: 0, income: 0, expense: 0 };
      }
      
      transactionsByDate[date].count += 1;
      if (transaction.type === 'income') {
        transactionsByDate[date].income += transaction.amount;
      } else if (transaction.type === 'expense') {
        transactionsByDate[date].expense += transaction.amount;
      }
    });
    
    // Sort dates chronologically
    const sortedDates = Object.entries(transactionsByDate)
      .sort((a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime());
    
    console.log('\nTransaction Activity by Date:');
    sortedDates.forEach(([date, data]) => {
      console.log(`${date}: ${data.count} transactions, Income: KES ${data.income.toFixed(2)}, Expense: KES ${data.expense.toFixed(2)}, Net: KES ${(data.income - data.expense).toFixed(2)}`);
    });
    
    // 5. Transaction Type Distribution
    console.log('\nTransaction Type Distribution:');
    const totalTransactions = transactions.length;
    const incomeCount = transactions.filter(t => t.type === 'income').length;
    const expenseCount = transactions.filter(t => t.type === 'expense').length;
    const transferCount = transactions.filter(t => t.type === 'transfer').length;
    
    console.log(`Income Transactions: ${incomeCount} (${(incomeCount/totalTransactions*100).toFixed(2)}%)`);
    console.log(`Expense Transactions: ${expenseCount} (${(expenseCount/totalTransactions*100).toFixed(2)}%)`);
    console.log(`Transfer Transactions: ${transferCount} (${(transferCount/totalTransactions*100).toFixed(2)}%)`);
    
  } catch (error) {
    console.error('Error analyzing M-PESA transactions:', error);
  }
}

// Run the analysis
analyzeMpesaTransactions();