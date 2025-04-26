import { Request, Response } from 'express';
import { StatementService } from '../services/statement.service';
import { GetStatementsDTO, UploadStatementDTO } from '../types/statement.types';

class StatementController {
  private statementService: StatementService;

  constructor() {
    this.statementService = new StatementService();
  }

  uploadStatement = async (req: Request, res: Response) => {
    try {
      const { accountId, fileType } = req.body as UploadStatementDTO;
      const file = req.file;

      if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }

      const statement = await this.statementService.uploadStatement(
        req.user!.userId,
        accountId as string,
        file,
        fileType
      );

      res.status(201).json(statement);
    } catch (error) {
      console.error('Error uploading statement:', error);
      res.status(500).json({ message: 'Failed to upload statement' });
    }
  };

  getStatements = async (req: Request, res: Response) => {
    try {
      const filters = req.query as unknown as GetStatementsDTO;
      const statements = await this.statementService.getStatements(req.user!.userId, filters);
      res.json(statements);
    } catch (error) {
      console.error('Error getting statements:', error);
      res.status(500).json({ message: 'Failed to get statements' });
    }
  };

  getStatementById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const statement = await this.statementService.getStatementById(req.user!.userId, id);

      if (!statement) {
        return res.status(404).json({ message: 'Statement not found' });
      }

      res.json(statement);
    } catch (error) {
      console.error('Error getting statement:', error);
      res.status(500).json({ message: 'Failed to get statement' });
    }
  };
}

export const statementController = new StatementController(); 