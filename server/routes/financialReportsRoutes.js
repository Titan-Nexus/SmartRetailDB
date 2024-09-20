// server/routes/financialReportsRoutes.js
const express = require('express');
const router = express.Router();
const financialReportsController = require('../controllers/financialReportsController');

// Get all financial reports
router.get('/', financialReportsController.getFinancialReports);

// Get a specific financial report by ID
router.get('/:id', financialReportsController.getFinancialReportById);

// Add a new financial report
router.post('/', financialReportsController.addFinancialReport);

// Update an existing financial report
router.put('/:id', financialReportsController.updateFinancialReport);

// Delete a financial report
router.delete('/:id', financialReportsController.deleteFinancialReport);

module.exports = router;