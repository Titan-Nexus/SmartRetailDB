// server/routes/employeesRoutes.js
const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employeesController');

// Get all employees
router.get('/', employeesController.getEmployees);

// Get a specific employee by ID
router.get('/:id', employeesController.getEmployeeById);

// Add a new employee
router.post('/', employeesController.addEmployee);

// Update an existing employee
router.put('/:id', employeesController.updateEmployee);

// Delete an employee
router.delete('/:id', employeesController.deleteEmployee);

module.exports = router;