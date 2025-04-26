import { describe, it, expect } from 'vitest';
import { type BankStatementTemplate } from '../types/statement.types';
import { bankTemplates, parseMpesaTransactionRow } from './pdf-parser';

describe('M-PESA Transaction Pattern Tests', () => {
  const mpesaTemplate = bankTemplates['mpesa'] as BankStatementTemplate;
  
  it('should parse M-PESA customer transfer transaction correctly', () => {
    const row = 'TDN7TZ7G9L 2025-04-23 08:11:09 Customer Transfer to 0705***373 - Ian Otwona Akhulunya COMPLETED 0.00 5,000.00 5,152.15';
    
    const result = parseMpesaTransactionRow(row);
    
    expect(result).toBeTruthy();
    expect(result).toMatchObject({
      reference: 'TDN7TZ7G9L',
      type: 'expense',
      amount: 5000.00,
      status: 'COMPLETED',
      merchant: 'Ian Otwona Akhulunya',
      description: 'Customer Transfer to 0705***373 - Ian Otwona Akhulunya'
    });
    expect(result?.timestamp).toBeInstanceOf(Date);
  });

  it('should parse M-PESA transaction charge row correctly', () => {
    const row = 'TDN7TZ7G9L 2025-04-23 08:11:09 Customer Transfer of Funds Charge COMPLETED 0.00 57.00 5,095.15';
    
    const result = parseMpesaTransactionRow(row);
    
    expect(result).toBeTruthy();
    expect(result).toMatchObject({
      reference: 'TDN7TZ7G9L',
      type: 'expense',
      amount: 57.00,
      status: 'COMPLETED',
      description: 'Customer Transfer of Funds Charge'
    });
  });

  it('should parse M-PESA income transaction correctly', () => {
    const row = 'TDJ8EP0V12 2025-04-19 16:36:30 Funds received from 0721***634 - KELVIN KORIR NGEIYWA COMPLETED 140.00 0.00 20,483.15';
    
    const result = parseMpesaTransactionRow(row);
    
    expect(result).toBeTruthy();
    expect(result).toMatchObject({
      reference: 'TDJ8EP0V12',
      type: 'income',
      amount: 140.00,
      status: 'COMPLETED',
      merchant: 'KELVIN KORIR NGEIYWA',
      description: 'Funds received from 0721***634 - KELVIN KORIR NGEIYWA'
    });
  });

  it('should parse M-PESA pay bill transaction correctly', () => {
    const row = 'TDK0HM966K 2025-04-20 10:40:01 Pay Bill Online to 4072023 - MAVUNO CHURCH WAIYAKI WAY Acc. OFFERING COMPLETED 0.00 1,000.00 13,713.15';
    
    const result = parseMpesaTransactionRow(row);
    
    expect(result).toBeTruthy();
    expect(result).toMatchObject({
      reference: 'TDK0HM966K',
      type: 'expense',
      amount: 1000.00,
      status: 'COMPLETED',
      merchant: 'MAVUNO CHURCH WAIYAKI WAY',
      description: 'Pay Bill Online to 4072023 - MAVUNO CHURCH WAIYAKI WAY Acc. OFFERING'
    });
  });
  
  it('should parse M-PESA merchant payment transaction correctly', () => {
    const row = 'TDL5MIYKGZ 2025-04-21 13:58:54 Merchant Payment Online to 927569 - AFI MUTHIGA PORK HOUSE COMPLETED 0.00 1,700.00 10,786.15';
    
    const result = parseMpesaTransactionRow(row);
    
    expect(result).toBeTruthy();
    expect(result).toMatchObject({
      reference: 'TDL5MIYKGZ',
      type: 'expense',
      amount: 1700.00,
      status: 'COMPLETED',
      merchant: 'AFI MUTHIGA PORK HOUSE',
      description: 'Merchant Payment Online to 927569 - AFI MUTHIGA PORK HOUSE'
    });
  });
  
  it('should parse M-PESA business payment transaction correctly', () => {
    const row = 'TDJ2D0049G 2025-04-19 09:58:11 Business Payment from 3012557 - YETU SACCO SOCIETY LTD via API. Original conversation ID is SWG_a6ca9221-1ceb11f0-816d-f2a2b77b3e48. COMPLETED 3,000.00 0.00 21,650.15';
    
    const result = parseMpesaTransactionRow(row);
    
    expect(result).toBeTruthy();
    expect(result).toMatchObject({
      reference: 'TDJ2D0049G',
      type: 'income',
      amount: 3000.00,
      status: 'COMPLETED',
      merchant: 'YETU SACCO SOCIETY LTD',
      description: 'Business Payment from 3012557 - YETU SACCO SOCIETY LTD via API. Original conversation ID is SWG_a6ca9221-1ceb11f0-816d-f2a2b77b3e48.'
    });
  });
});

describe('parseMpesaTransactionRow', () => {
  it('should parse a valid M-PESA transaction row', () => {
    const line = 'TDN7TZ7G9L 2024-03-15 14:44:12 Customer Transfer to John Doe COMPLETED KES 1,000.00';
    const result = parseMpesaTransactionRow(line);
    
    expect(result).toEqual({
      timestamp: new Date('2024-03-15 14:44:12'),
      description: 'Customer Transfer to John Doe',
      amount: 1000.00,
      type: 'expense',
      merchant: 'John Doe'
    });
  });

  it('should parse a business payment transaction', () => {
    const line = 'TDJ8EP0V12 2024-03-15 15:30:00 Business Payment from ACME Corp COMPLETED KES 5,000.00';
    const result = parseMpesaTransactionRow(line);
    
    expect(result).toEqual({
      timestamp: new Date('2024-03-15 15:30:00'),
      description: 'Business Payment from ACME Corp',
      amount: 5000.00,
      type: 'income',
      merchant: 'ACME Corp'
    });
  });

  it('should parse a merchant payment transaction', () => {
    const line = 'TDK0HM966K 2024-03-15 16:15:00 Merchant Payment to XYZ Store COMPLETED KES 2,500.00';
    const result = parseMpesaTransactionRow(line);
    
    expect(result).toEqual({
      timestamp: new Date('2024-03-15 16:15:00'),
      description: 'Merchant Payment to XYZ Store',
      amount: 2500.00,
      type: 'expense',
      merchant: 'XYZ Store'
    });
  });
});