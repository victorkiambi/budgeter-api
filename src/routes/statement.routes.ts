import { Router } from 'express';
import { statementController } from '../controllers/statement.controller';
import { authenticate } from '../middleware/auth.middleware';
import multer from 'multer';
import path from 'path';
import { Request } from 'express';

const router = Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: 'uploads/statements',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

// File filter to allow only CSV and PDF files
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const allowedTypes = ['text/csv', 'application/pdf'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only CSV and PDF files are allowed.'));
    }
};

const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Statement:
 *       type: object
 *       required:
 *         - id
 *         - userId
 *         - accountId
 *         - filename
 *         - fileType
 *         - uploadedAt
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         userId:
 *           type: string
 *           format: uuid
 *         accountId:
 *           type: string
 *           format: uuid
 *         filename:
 *           type: string
 *         fileType:
 *           type: string
 *           enum: [CSV, PDF]
 *         uploadedAt:
 *           type: string
 *           format: date-time
 *         processedAt:
 *           type: string
 *           format: date-time
 *           nullable: true
 *         transactionCount:
 *           type: integer
 *           nullable: true
 *     StatementsList:
 *       type: object
 *       properties:
 *         statements:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Statement'
 *         pagination:
 *           type: object
 *           properties:
 *             total:
 *               type: integer
 *             page:
 *               type: integer
 *             limit:
 *               type: integer
 *             pages:
 *               type: integer
 */

/**
 * @swagger
 * /api/statements:
 *   post:
 *     summary: Upload a new statement
 *     description: Upload a bank statement file (CSV or PDF) for processing
 *     tags: [Statements]
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - file
 *               - accountId
 *               - fileType
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: The statement file (CSV or PDF)
 *               accountId:
 *                 type: string
 *                 description: ID of the account this statement belongs to
 *               fileType:
 *                 type: string
 *                 enum: [CSV, PDF]
 *                 description: Type of the uploaded file
 *     responses:
 *       201:
 *         description: Statement uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id: 
 *                   type: string
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Unauthorized
 *       413:
 *         description: File too large
 *   get:
 *     summary: Get all statements
 *     description: Retrieve all statements for the authenticated user
 *     tags: [Statements]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: accountId
 *         schema:
 *           type: string
 *         description: Filter statements by account ID
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         description: Filter statements by start date
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         description: Filter statements by end date
 *     responses:
 *       200:
 *         description: List of statements
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Statement'
 *       401:
 *         description: Unauthorized
 */
router.post('/', authenticate, upload.single('file'), statementController.uploadStatement);
router.get('/', authenticate, statementController.getStatements);

/**
 * @swagger
 * /api/statements/{id}:
 *   get:
 *     summary: Get a statement by ID
 *     tags: [Statements]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Statement ID
 *     responses:
 *       200:
 *         description: Statement retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Statement'
 *       404:
 *         description: Statement not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/:id', authenticate, statementController.getStatementById);

export default router; 