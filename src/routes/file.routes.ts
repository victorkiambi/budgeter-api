import { Router } from 'express';
import { fileController } from '../controllers/file.controller';
import { authenticateToken } from '../middleware/auth';
import multer from 'multer';
import { validateRequest } from '../middleware/validateRequest';
import { fileUploadSchema } from '../types/file.types';

/**
 * @swagger
 * components:
 *   schemas:
 *     FileUpload:
 *       type: object
 *       required:
 *         - filename
 *         - fileType
 *         - mimeType
 *         - size
 *       properties:
 *         filename:
 *           type: string
 *           description: Name of the file
 *         fileType:
 *           type: string
 *           enum: [csv, pdf]
 *           description: Type of the file
 *         mimeType:
 *           type: string
 *           enum: [text/csv, application/pdf]
 *           description: MIME type of the file
 *         size:
 *           type: number
 *           maximum: 5242880
 *           description: Size of the file in bytes (max 5MB)
 *         accountId:
 *           type: string
 *           format: uuid
 *           description: ID of the account this file is associated with
 *     FileResponse:
 *       type: object
 *       required:
 *         - id
 *         - filename
 *         - fileType
 *         - uploadedAt
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         filename:
 *           type: string
 *         fileType:
 *           type: string
 *           enum: [csv, pdf]
 *         uploadedAt:
 *           type: string
 *           format: date-time
 *         processedAt:
 *           type: string
 *           format: date-time
 *           nullable: true
 *         error:
 *           type: string
 *           nullable: true
 *     FileProcessingResult:
 *       type: object
 *       required:
 *         - status
 *       properties:
 *         status:
 *           type: string
 *           enum: [PENDING, PROCESSING, COMPLETED, FAILED]
 *         message:
 *           type: string
 *         error:
 *           type: string
 *         processedRows:
 *           type: integer
 *         totalRows:
 *           type: integer
 *     FileList:
 *       type: object
 *       properties:
 *         files:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/FileResponse'
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

const router = Router();

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['text/csv', 'application/pdf'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only CSV and PDF files are allowed.'));
    }
  }
});

// Apply authentication middleware to all file routes
router.use(authenticateToken);

/**
 * @swagger
 * /api/files/upload:
 *   post:
 *     summary: Upload a new file
 *     tags: [Files]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - file
 *               - fileType
 *               - accountId
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: The file to upload (CSV or PDF)
 *               fileType:
 *                 type: string
 *                 enum: [csv, pdf]
 *                 description: Type of the file being uploaded
 *               accountId:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the account this file is associated with
 *     responses:
 *       201:
 *         description: File uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FileResponse'
 *       400:
 *         description: Invalid input or file type
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Unauthorized
 *       413:
 *         description: File too large
 *       500:
 *         description: Server error
 */
router.post('/upload', upload.single('file'), validateRequest({ body: fileUploadSchema }), fileController.uploadFile);

/**
 * @swagger
 * /api/files:
 *   get:
 *     summary: Get all files
 *     tags: [Files]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: accountId
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Filter files by account ID
 *       - in: query
 *         name: fileType
 *         schema:
 *           type: string
 *           enum: [csv, pdf]
 *         description: Filter files by type
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         description: Filter files uploaded after this date
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         description: Filter files uploaded before this date
 *     responses:
 *       200:
 *         description: List of files
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FileList'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get('/', fileController.getFiles);

/**
 * @swagger
 * /api/files/{id}:
 *   get:
 *     summary: Get file by ID
 *     tags: [Files]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: File ID
 *     responses:
 *       200:
 *         description: File details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FileResponse'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: File not found
 *       500:
 *         description: Server error
 */
router.get('/:id', fileController.getFileById);

/**
 * @swagger
 * /api/files/{id}/process:
 *   post:
 *     summary: Process an uploaded file
 *     tags: [Files]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: File ID
 *     responses:
 *       200:
 *         description: File processing started
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FileProcessingResult'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: File not found
 *       500:
 *         description: Server error
 */
router.post('/:id/process', fileController.processFile);

/**
 * @swagger
 * /api/files/{id}/status:
 *   get:
 *     summary: Get file processing status
 *     tags: [Files]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: File ID
 *     responses:
 *       200:
 *         description: File processing status
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FileProcessingResult'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: File not found
 *       500:
 *         description: Server error
 */
router.get('/:id/status', fileController.getFileStatus);

/**
 * @swagger
 * /api/files/{id}:
 *   delete:
 *     summary: Delete file
 *     tags: [Files]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: File ID
 *     responses:
 *       204:
 *         description: File deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: File not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', fileController.deleteFile);

export { router as fileRoutes }; 