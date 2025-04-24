import { z } from 'zod';

// Base User Schema
export const userBaseSchema = z.object({
  email: z.string().email('Invalid email format'),
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
});

// Schema for creating a new user (internal use, not for direct API endpoints)
export const createUserSchema = userBaseSchema.extend({
  passwordHash: z.string(),
});

// Schema for updating user profile
export const updateUserProfileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
  email: z.string().email('Invalid email format').optional(),
}).refine((data) => Object.keys(data).length > 0, {
  message: "At least one field must be provided for update"
});

// Schema for changing password
export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z.string().min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
});

// Schema for user query parameters
export const userQuerySchema = z.object({
  email: z.string().email('Invalid email format').optional(),
  id: z.string().uuid('Invalid user ID format').optional(),
}).refine((data) => Object.keys(data).length > 0, {
  message: "At least one query parameter must be provided"
});

// Response Schemas
export const userResponseSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Types inferred from schemas
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserProfileInput = z.infer<typeof updateUserProfileSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
export type UserQueryParams = z.infer<typeof userQuerySchema>;
export type UserResponse = z.infer<typeof userResponseSchema>;

// Additional types for internal use
export interface UserWithPassword extends UserResponse {
  passwordHash: string;
}

export interface UserSessionInfo {
  id: string;
  email: string;
  name: string | null;
} 