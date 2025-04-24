import { Request, Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '../types/auth.types';
import { authService } from '../services/auth.service';

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const [bearer, token] = authHeader.split(' ');

    if (bearer !== 'Bearer' || !token) {
      return res.status(401).json({ message: 'Invalid token format' });
    }

    const payload = await authService.validateAccessToken(token);
    (req as AuthenticatedRequest).user = payload;

    next();
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json({ message: error.message });
    }
    return res.status(401).json({ message: 'Invalid token' });
  }
}; 