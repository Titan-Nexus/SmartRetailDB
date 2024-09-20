// server/routes/transactionsRoutes.js
const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactionsController');

// Get all transactions
router.get('/', transactionsController.getTransactions);

// Get a specific transaction by ID
router.get('/:id', transactionsController.getTransactionById);

// Add a new transaction
router.post('/', transactionsController.addTransaction);

// Update an existing transaction
router.put('/:id', transactionsController.updateTransaction);

// Delete a transaction
router.delete('/:id', transactionsController.deleteTransaction);

module.exports = router;