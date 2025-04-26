import { z } from 'zod';
import { Prisma } from '../generated/prisma';

// Get CategoryType from Prisma namespace
type CategoryType = Prisma.CategoryType;

// Base schema for category validation
export const categoryBaseSchema = z.object({
  name: z.string().min(1, 'Category name is required').max(100, 'Category name is too long'),
  type: z.enum(['system', 'user'] as const).default('system'),
  keywords: z.string().nullable().optional()
});

// Schema for creating a new category
export const createCategorySchema = categoryBaseSchema;
export type CreateCategoryDTO = z.infer<typeof createCategorySchema>;

// Schema for updating an existing category
export const updateCategorySchema = categoryBaseSchema.partial();
export type UpdateCategoryDTO = z.infer<typeof updateCategorySchema>;

// Schema for category filters
export const categoryFiltersSchema = z.object({
  type: z.enum(['system', 'user'] as const).optional(),
  search: z.string().optional()
});
export type CategoryFiltersDTO = z.infer<typeof categoryFiltersSchema>;

// Response types
export interface CategoryResponse {
  id: string;
  name: string;
  type: CategoryType;
  keywords: string | null;
  transactionCount?: number;
}

export interface GetCategoriesResponse {
  categories: CategoryResponse[];
  pagination?: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
} 