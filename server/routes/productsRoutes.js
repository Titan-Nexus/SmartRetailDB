// server/routes/productsRoutes.js
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Get all products
router.get('/', productsController.getProducts);

// Get a specific product by ID
router.get('/:id', productsController.getProductById);

// Add a new product
router.post('/', productsController.addProduct);

// Update an existing product
router.put('/:id', productsController.updateProduct);

// Delete a product
router.delete('/:id', productsController.deleteProduct);

module.exports = router;