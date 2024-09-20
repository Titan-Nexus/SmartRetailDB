// server/routes/suppliersRoutes.js
const express = require('express');
const router = express.Router();
const suppliersController = require('../controllers/suppliersController');

// Get all suppliers
router.get('/', suppliersController.getSuppliers);

// Get a specific supplier by ID
router.get('/:id', suppliersController.getSupplierById);

// Add a new supplier
router.post('/', suppliersController.addSupplier);

// Update an existing supplier
router.put('/:id', suppliersController.updateSupplier);

// Delete a supplier
router.delete('/:id', suppliersController.deleteSupplier);

module.exports = router;