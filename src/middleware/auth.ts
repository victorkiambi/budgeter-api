import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/auth.service';

// Extend Express Request type to include user
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
      };
    }
  }
}

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const payload = await authService.validateAccessToken(token);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}; 