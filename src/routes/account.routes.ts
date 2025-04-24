import { Router } from 'express';
import { accountController } from '../controllers/account.controller';
import { validateRequest } from '../middleware/validateRequest';
import { createAccountSchema, updateAccountSchema, updateBalanceSchema } from '../types/account.types';
import { authenticateToken } from '../middleware/auth';

/**
 * @swagger
 * components:
 *   schemas:
 *     Account:
 *       type: object
 *       required:
 *         - id
 *         - userId
 *         - name
 *         - type
 *         - currency
 *         - balance
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         userId:
 *           type: string
 *           format: uuid
 *         name:
 *           type: string
 *         type:
 *           type: string
 *           enum: [CHECKING, SAVINGS, CREDIT_CARD, INVESTMENT, LOAN, WALLET]
 *         currency:
 *           type: string
 *           enum: [USD, EUR, GBP, KES]
 *         balance:
 *           type: number
 *           format: decimal
 *         isDefault:
 *           type: boolean
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     CreateAccount:
 *       type: object
 *       required:
 *         - name
 *         - type
 *         - currency
 *         - balance
 *       properties:
 *         name:
 *           type: string
 *         type:
 *           type: string
 *           enum: [CHECKING, SAVINGS, CREDIT_CARD, INVESTMENT, LOAN, WALLET]
 *         currency:
 *           type: string
 *           enum: [USD, EUR, GBP, KES]
 *         balance:
 *           type: number
 *           format: decimal
 *         isDefault:
 *           type: boolean
 *     UpdateAccount:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         type:
 *           type: string
 *           enum: [CHECKING, SAVINGS, CREDIT_CARD, INVESTMENT, LOAN, WALLET]
 *         isDefault:
 *           type: boolean
 *     UpdateBalance:
 *       type: object
 *       required:
 *         - balance
 *       properties:
 *         balance:
 *           type: number
 *           format: decimal
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 */

const router = Router();

// Apply authentication middleware to all account routes
router.use(authenticateToken);

/**
 * @swagger
 * /api/accounts:
 *   post:
 *     summary: Create a new account
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateAccount'
 *     responses:
 *       201:
 *         description: Account created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Account'
 *       400:
 *         description: Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post('/', validateRequest({ body: createAccountSchema }), accountController.createAccount);

/**
 * @swagger
 * /api/accounts:
 *   get:
 *     summary: Get all accounts
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [CHECKING, SAVINGS, CREDIT_CARD, INVESTMENT, LOAN, WALLET]
 *         description: Filter accounts by type
 *       - in: query
 *         name: currency
 *         schema:
 *           type: string
 *           enum: [USD, EUR, GBP, KES]
 *         description: Filter accounts by currency
 *       - in: query
 *         name: isDefault
 *         schema:
 *           type: boolean
 *         description: Filter by default status
 *     responses:
 *       200:
 *         description: List of accounts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Account'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get('/', accountController.getAccounts);

/**
 * @swagger
 * /api/accounts/{id}:
 *   get:
 *     summary: Get account by ID
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Account ID
 *     responses:
 *       200:
 *         description: Account details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Account'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Account not found
 *       500:
 *         description: Server error
 */
router.get('/:id', accountController.getAccountById);

/**
 * @swagger
 * /api/accounts/{id}:
 *   put:
 *     summary: Update account
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Account ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateAccount'
 *     responses:
 *       200:
 *         description: Account updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Account'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Account not found
 *       500:
 *         description: Server error
 */
router.put('/:id', validateRequest({ body: updateAccountSchema }), accountController.updateAccount);

/**
 * @swagger
 * /api/accounts/{id}/balance:
 *   patch:
 *     summary: Update account balance
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Account ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateBalance'
 *     responses:
 *       200:
 *         description: Balance updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Account'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Account not found
 *       500:
 *         description: Server error
 */
router.patch('/:id/balance', validateRequest({ body: updateBalanceSchema }), accountController.updateBalance);

/**
 * @swagger
 * /api/accounts/{id}:
 *   delete:
 *     summary: Delete account
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Account ID
 *     responses:
 *       204:
 *         description: Account deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Account not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', accountController.deleteAccount);

export { router as accountRoutes }; 