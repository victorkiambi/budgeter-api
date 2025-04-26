declare module 'tabula-js' {
  /**
   * Creates a tabula instance for a PDF file
   * @param pdfPath Path to the PDF file
   * @param options Optional configuration options
   */
  function tabula(pdfPath: string, options?: any): Tabula;
  
  /**
   * Tabula instance for a PDF file
   */
  interface Tabula {
    /**
     * Extract tables from the PDF
     * @param options Extraction options
     */
    extract(options?: TabulaOptions): Promise<any[]>;
    
    /**
     * Stream extraction results
     * @param options Extraction options
     */
    streamData(options?: TabulaOptions): NodeJS.ReadableStream;
  }
  
  /**
   * Options for tabula extraction
   */
  interface TabulaOptions {
    /**
     * Page selection
     * Examples: 'all', '1', '1-3', '1,3,5'
     */
    pages?: string;
    
    /**
     * Area to extract tables from
     * Format: [y1, x1, y2, x2] (percentage values from 0-100)
     */
    area?: [number, number, number, number];
    
    /**
     * Use spreadsheet mode for table extraction
     */
    spreadsheet?: boolean;
    
    /**
     * Use lattice mode for table detection
     */
    lattice?: boolean;
    
    /**
     * Use stream mode for table extraction
     */
    stream?: boolean;
    
    /**
     * Password if PDF is encrypted
     */
    password?: string;
    
    /**
     * Enable guessing of cell merges
     */
    guess?: boolean;
    
    /**
     * Format for output data
     * Examples: 'CSV', 'TSV', 'JSON'
     */
    format?: string;
    
    /**
     * Output file to save results
     */
    output?: string;
    
    /**
     * Silent mode (no console output)
     */
    silent?: boolean;
    
    /**
     * Additional command line options for tabula-java
     */
    [key: string]: any;
  }
  
  export = tabula;
}