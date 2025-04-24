import { RegisterDTO, LoginDTO, AuthResponse, JWTPayload, TokenResponse } from '../types/auth.types';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { PrismaClient, User } from '@prisma/client';
import { randomUUID } from 'crypto';
import { prisma } from '../lib/prisma';

class AuthService {
  private readonly JWT_ACCESS_SECRET: string;
  private readonly JWT_REFRESH_SECRET: string;
  private readonly JWT_ACCESS_EXPIRES_IN: string;
  private readonly JWT_REFRESH_EXPIRES_IN: string;

  constructor() {
    this.JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'your-access-secret-key';
    this.JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'your-refresh-secret-key';
    this.JWT_ACCESS_EXPIRES_IN = process.env.JWT_ACCESS_EXPIRES_IN || '15m';
    this.JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '7d';
  }

  async register(data: RegisterDTO): Promise<AuthResponse> {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email }
    });

    if (existingUser) {
      throw new Error('User already exists');
    }

    // Hash password
    const passwordHash = await bcrypt.hash(data.password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        email: data.email,
        passwordHash,
        name: data.name
      }
    });

    // Generate tokens
    const tokens = await this.generateTokens(user);

    return {
      ...tokens,
      user: {
        id: user.id,
        email: user.email,
        name: user.name || undefined
      }
    };
  }

  async login(data: LoginDTO): Promise<AuthResponse> {
    // Find user
    const user = await prisma.user.findUnique({
      where: { email: data.email }
    });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(data.password, user.passwordHash);

    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    // Generate tokens
    const tokens = await this.generateTokens(user);

    return {
      ...tokens,
      user: {
        id: user.id,
        email: user.email,
        name: user.name || undefined
      }
    };
  }

  async refresh(refreshToken: string): Promise<TokenResponse> {
    try {
      // Verify refresh token
      const payload = jwt.verify(refreshToken, this.JWT_REFRESH_SECRET) as JWTPayload;

      if (payload.tokenType !== 'refresh') {
        throw new Error('Invalid token type');
      }

      // Get user
      const user = await prisma.user.findUnique({
        where: { id: payload.userId }
      });

      if (!user) {
        throw new Error('User not found');
      }

      // Generate new tokens
      return this.generateTokens(user);
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
  }

  private async generateTokens(user: User): Promise<TokenResponse> {
    const tokenId = randomUUID();

    const accessToken = this.generateAccessToken(user);
    const refreshToken = this.generateRefreshToken(user, tokenId);

    return {
      accessToken,
      refreshToken
    };
  }

  private generateAccessToken(user: User): string {
    const payload: JWTPayload = {
      userId: user.id,
      email: user.email,
      tokenType: 'access'
    };

    return jwt.sign(
      payload, 
      this.JWT_ACCESS_SECRET, 
      { expiresIn: this.JWT_ACCESS_EXPIRES_IN } as jwt.SignOptions
    );
  }

  private generateRefreshToken(user: User, tokenId: string): string {
    const payload: JWTPayload = {
      userId: user.id,
      email: user.email,
      tokenType: 'refresh'
    };

    return jwt.sign(
      payload, 
      this.JWT_REFRESH_SECRET, 
      { expiresIn: this.JWT_REFRESH_EXPIRES_IN } as jwt.SignOptions
    );
  }

  async validateAccessToken(token: string): Promise<JWTPayload> {
    try {
      const payload = jwt.verify(token, this.JWT_ACCESS_SECRET) as JWTPayload;
      
      if (payload.tokenType !== 'access') {
        throw new Error('Invalid token type');
      }

      return payload;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}

export const authService = new AuthService(); 