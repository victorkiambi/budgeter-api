# PDF Parser Changelog

## M-PESA Parser Improvements (April 2025)

### Enhanced Bank Template
- Added `columnHeaders` to better recognize table structures in M-PESA statements
- Updated patterns to match actual M-PESA statement format
- Added new pattern keys for more precise targeting

### New Parsing Logic
- Created dedicated `extractMpesaTransactions` function for tabular M-PESA statements
- Implemented `parseMpesaTransactionRow` to handle the column structure
- Added multi-line transaction support for complex descriptions
- Improved handling of page breaks and disclaimers

### Better Transaction Classification
- Enhanced transaction type determination using both amounts and descriptions
- Improved merchant name extraction with cleaner results
- Added special handling for various transaction categories
- Better handling of payment references and receipt numbers

### Error Handling & Logging
- Added more detailed logging for troubleshooting
- Improved error reporting with context information
- Added validation for extracted transaction data
- Added recovery mechanisms for problematic transactions

### Analysis & Export Tools
- Added transaction analysis script for insights and summary statistics
- Created CSV export functionality for further analysis in external tools
- Implemented categorization logic for better financial reporting
- Added summary statistics for income vs. expense analysis

### Testing
- Updated test cases with actual M-PESA transaction formats
- Added comprehensive tests for various transaction types
- Improved test coverage for edge cases

### Documentation
- Added detailed documentation for the parser implementation
- Created usage examples for integration into applications
- Documented data format and parsing process
- Added information about limitations and future improvements