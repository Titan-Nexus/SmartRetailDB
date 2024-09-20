// server/routes/salesRoutes.js
const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');

// Get all sales
router.get('/', salesController.getSales);

// Get a specific sale by ID
router.get('/:id', salesController.getSaleById);

// Add a new sale
router.post('/', salesController.addSale);

// Update an existing sale
router.put('/:id', salesController.updateSale);

// Delete a sale
router.delete('/:id', salesController.deleteSale);

module.exports = router;