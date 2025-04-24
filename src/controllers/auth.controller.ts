import { Request, Response } from 'express';
import { authService } from '../services/auth.service';
import { LoginDTO, RegisterDTO } from '../types/auth.types';
import { z } from 'zod';

export class AuthController {
  async register(req: Request, res: Response) {
    try {
      const data: RegisterDTO = req.body;
      
      // Basic validation
      if (!data.email || !data.password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }

      const result = await authService.register(data);
      return res.status(201).json(result);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'User already exists') {
          return res.status(409).json({ message: error.message });
        }
      }
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const data: LoginDTO = req.body;
      
      // Basic validation
      if (!data.email || !data.password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }

      const result = await authService.login(data);
      return res.status(200).json(result);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Invalid credentials') {
          return res.status(401).json({ message: error.message });
        }
      }
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async refresh(req: Request, res: Response) {
    try {
      const refreshTokenSchema = z.object({
        refreshToken: z.string()
      });

      const { refreshToken } = refreshTokenSchema.parse(req.body);
      const tokens = await authService.refresh(refreshToken);
      
      return res.status(200).json(tokens);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: 'Validation failed',
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      }
      if (error instanceof Error) {
        return res.status(401).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export const authController = new AuthController(); 