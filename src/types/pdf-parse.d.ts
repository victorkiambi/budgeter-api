declare module 'pdf-parse' {
  export interface PDFData {
    text: string;
    numpages: number;
    numrender: number;
    info: {
      PDFFormatVersion: string;
      IsAcroFormPresent: boolean;
      IsXFAPresent: boolean;
      [key: string]: any;
    };
    metadata: {
      [key: string]: any;
    };
    version: string;
  }

  export default function(dataBuffer: Buffer, options?: {
    pagerender?: (pageData: any) => string;
    max?: number;
    version?: string;
  }): Promise<PDFData>;
} 