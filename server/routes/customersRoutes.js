// server/routes/customersRoutes.js
const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customersController');

// Get all customers
router.get('/', customersController.getCustomers);

// Get a specific customer by ID
router.get('/:id', customersController.getCustomerById);

// Add a new customer
router.post('/', customersController.addCustomer);

// Update an existing customer
router.put('/:id', customersController.updateCustomer);

// Delete a customer
router.delete('/:id', customersController.deleteCustomer);

module.exports = router;