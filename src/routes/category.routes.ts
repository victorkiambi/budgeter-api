import { Router } from 'express';
import { categoryController } from '../controllers/category.controller';
import { validateRequest } from '../middleware/validateRequest';
import { createCategorySchema, updateCategorySchema, categoryFiltersSchema } from '../types/category.types';
import { authenticateToken } from '../middleware/auth';

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - type
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         name:
 *           type: string
 *           description: Name of the category
 *         type:
 *           type: string
 *           enum: [system, user]
 *           description: Type of the category
 *         keywords:
 *           type: string
 *           nullable: true
 *           description: Comma-separated keywords for transaction matching
 *         transactionCount:
 *           type: integer
 *           description: Number of transactions in this category
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     CreateCategory:
 *       type: object
 *       required:
 *         - name
 *         - type
 *       properties:
 *         name:
 *           type: string
 *           minLength: 1
 *           maxLength: 100
 *           description: Name of the category
 *         type:
 *           type: string
 *           enum: [system, user]
 *           default: system
 *           description: Type of the category
 *         keywords:
 *           type: string
 *           nullable: true
 *           description: Comma-separated keywords for transaction matching
 *     UpdateCategory:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           minLength: 1
 *           maxLength: 100
 *           description: Name of the category
 *         type:
 *           type: string
 *           enum: [system, user]
 *           description: Type of the category
 *         keywords:
 *           type: string
 *           nullable: true
 *           description: Comma-separated keywords for transaction matching
 *     CategoryList:
 *       type: object
 *       properties:
 *         categories:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Category'
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

// Apply authentication middleware to all category routes
router.use(authenticateToken);

/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCategory'
 *     responses:
 *       201:
 *         description: Category created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
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
router.post('/', validateRequest({ body: createCategorySchema }), categoryController.createCategory);

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [system, user]
 *         description: Filter categories by type
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search categories by name or keywords
 *     responses:
 *       200:
 *         description: List of categories
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CategoryList'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get('/', validateRequest({ query: categoryFiltersSchema }), categoryController.getCategories);

/**
 * @swagger
 * /api/categories/{id}:
 *   get:
 *     summary: Get category by ID
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Category ID
 *     responses:
 *       200:
 *         description: Category details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Category not found
 *       500:
 *         description: Server error
 */
router.get('/:id', categoryController.getCategoryById);

/**
 * @swagger
 * /api/categories/{id}:
 *   put:
 *     summary: Update category
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateCategory'
 *     responses:
 *       200:
 *         description: Category updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Category not found
 *       500:
 *         description: Server error
 */
router.put('/:id', validateRequest({ body: updateCategorySchema }), categoryController.updateCategory);

/**
 * @swagger
 * /api/categories/{id}:
 *   delete:
 *     summary: Delete category
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Category ID
 *     responses:
 *       204:
 *         description: Category deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Category not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', categoryController.deleteCategory);

export { router as categoryRoutes }; 