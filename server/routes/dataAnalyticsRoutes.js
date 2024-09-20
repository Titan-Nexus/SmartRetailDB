// server/routes/dataAnalyticsRoutes.js
const express = require('express');
const router = express.Router();
const dataAnalyticsController = require('../controllers/dataAnalyticsController');

// Get all data analytics
router.get('/', dataAnalyticsController.getAllAnalytics);

// Get a specific analytic by ID
router.get('/:id', dataAnalyticsController.getAnalyticById);

// Add a new analytic
router.post('/', dataAnalyticsController.addAnalytic);

// Update an existing analytic
router.put('/:id', dataAnalyticsController.updateAnalytic);

// Delete an analytic
router.delete('/:id', dataAnalyticsController.deleteAnalytic);

module.exports = router;