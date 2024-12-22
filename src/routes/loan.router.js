const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loan.controller');

/**
 * @swagger
 * /api/loans:
 *   get:
 *     summary: Obtiene una lista de préstamos
 *     tags: [Loans]
 *     responses:
 *       200:
 *         description: Lista de préstamos
 */
router.get('/', loanController.getAllLoans);

/**
 * @swagger
 * /api/loans:
 *   post:
 *     summary: Realiza un nuevo préstamo de libro
 *     tags: [Loans]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bookId
 *               - userId
 *               - loanDate
 *               - returnDate
 *             properties:
 *               bookId:
 *                 type: string
 *               userId:
 *                 type: string
 *               loanDate:
 *                 type: string
 *               returnDate:
 *                 type: string
 *     responses:
 *       201:
 *         description: Préstamo realizado exitosamente
 */
router.post('/', loanController.createLoan);

module.exports = router;
