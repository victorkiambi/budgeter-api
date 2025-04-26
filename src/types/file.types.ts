import { z } from 'zod';
import { Prisma } from '../generated/prisma';

// Get FileType from Prisma namespace
type FileType = Prisma.FileType;

// Base schema for file validation
export const fileBaseSchema = z.object({
  filename: z.string().min(1, 'Filename is required'),
  fileType: z.enum(['csv', 'pdf'] as const),
  mimeType: z.string().refine((val) => {
    return val === 'text/csv' || val === 'application/pdf';
  }, 'Only CSV and PDF files are allowed'),
  size: z.number().max(5 * 1024 * 1024, 'File size must be less than 5MB')
});

// Schema for file upload validation
export const fileUploadSchema = fileBaseSchema.extend({
  buffer: z.instanceof(Buffer)
});
export type FileUploadDTO = z.infer<typeof fileUploadSchema>;

// Response types
export interface FileResponse {
  id: string;
  filename: string;
  fileType: FileType;
  uploadedAt: Date;
  processedAt?: Date | null;
  error?: string;
}

// File processing status
export enum FileProcessingStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED'
}

export interface FileProcessingResult {
  status: FileProcessingStatus;
  message?: string;
  error?: string;
  processedRows?: number;
  totalRows?: number;
} 