export class TextNormalizer {
  private static readonly COMMON_ABBREVIATIONS = new Map<string, string>([
    ['ltd', 'limited'],
    ['inc', 'incorporated'],
    ['corp', 'corporation'],
    ['intl', 'international'],
    ['pvt', 'private'],
    ['co', 'company'],
    ['&', 'and'],
  ]);

  private static readonly STOP_WORDS = new Set([
    'the', 'to', 'from', 'in', 'out', 'of', 'for', 'and', 'with', 'by'
  ]);

  private static readonly CURRENCY_SYMBOLS = new Map<string, string>([
    ['$', 'usd'],
    ['€', 'eur'],
    ['£', 'gbp'],
    ['¥', 'jpy'],
    ['ksh', 'kes'],
  ]);

  static normalizeText(text: string): string {
    let normalized = text.toLowerCase().trim();
    
    // Remove currency symbols and amounts
    normalized = this.removeCurrencyAndAmounts(normalized);
    
    // Replace special characters with spaces
    normalized = normalized.replace(/[^\w\s]/g, ' ');
    
    // Standardize spacing
    normalized = normalized.replace(/\s+/g, ' ');
    
    // Replace common abbreviations
    normalized = this.replaceAbbreviations(normalized);
    
    // Remove stop words
    normalized = this.removeStopWords(normalized);
    
    return normalized.trim();
  }

  static extractKeywords(text: string): string[] {
    const normalized = this.normalizeText(text);
    return normalized
      .split(' ')
      .filter(word => word.length > 2) // Filter out very short words
      .filter(word => !this.STOP_WORDS.has(word));
  }

  static removeCurrencyAndAmounts(text: string): string {
    // Remove currency symbols
    let processed = text;
    this.CURRENCY_SYMBOLS.forEach((_, symbol) => {
      processed = processed.replace(new RegExp(symbol, 'gi'), '');
    });
    
    // Remove amounts (numbers with optional decimals)
    processed = processed.replace(/\b\d+(\.\d{2})?\b/g, '');
    
    return processed;
  }

  private static replaceAbbreviations(text: string): string {
    let processed = text;
    this.COMMON_ABBREVIATIONS.forEach((full, abbr) => {
      const regex = new RegExp(`\\b${abbr}\\b`, 'gi');
      processed = processed.replace(regex, full);
    });
    return processed;
  }

  private static removeStopWords(text: string): string {
    return text
      .split(' ')
      .filter(word => !this.STOP_WORDS.has(word.toLowerCase()))
      .join(' ');
  }

  static extractTransactionCode(text: string): string | null {
    // Common transaction code patterns
    const patterns = [
      /\b[A-Z0-9]{6,}\b/, // Basic alphanumeric code
      /\bTRX[A-Z0-9]+\b/, // TRX prefix
      /\bREF[A-Z0-9]+\b/, // REF prefix
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match) return match[0];
    }

    return null;
  }

  static extractReferenceNumber(text: string): string | null {
    // Common reference number patterns
    const patterns = [
      /\bREF#?\s*([A-Z0-9]+)\b/i,
      /\bREFERENCE#?\s*([A-Z0-9]+)\b/i,
      /\b(?:TRANSACTION|TRX)#?\s*([A-Z0-9]+)\b/i,
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match) return match[1];
    }

    return null;
  }
} 