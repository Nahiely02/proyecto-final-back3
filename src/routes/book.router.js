const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Obtiene una lista de libros
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: Lista de libros
 */
router.get('/', bookController.getAllBooks);

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Agrega un nuevo libro
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - author
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               genre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Libro agregado exitosamente
 */
router.post('/', bookController.addBook);

module.exports = router;
