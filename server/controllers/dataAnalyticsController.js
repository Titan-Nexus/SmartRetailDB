// server/controllers/dataAnalyticsController.js
const db = require('../db');

// Get all data analytics
exports.getAllAnalytics = (req, res) => {
    db.query('SELECT * FROM Data_Analytics', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to retrieve data analytics' });
        } else {
            res.json(results);
        }
    });
};

// Get a specific analytic by ID
exports.getAnalyticById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM Data_Analytics WHERE AnalyticsID = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to retrieve data analytic' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Data analytic not found' });
        } else {
            res.json(results[0]);
        }
    });
};

// Add a new analytic
exports.addAnalytic = (req, res) => {
    const { AnalysisDate, SalesTrends, DemandForecasting, CustomerDemographics } = req.body;
    db.query('INSERT INTO Data_Analytics (AnalysisDate, SalesTrends, DemandForecasting, CustomerDemographics) VALUES (?, ?, ?, ?)', 
    [AnalysisDate, SalesTrends, DemandForecasting, CustomerDemographics], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to add data analytic' });
        } else {
            res.status(201).json({ message: 'Data analytic added successfully', AnalyticsID: results.insertId });
        }
    });
};

// Update an existing analytic
exports.updateAnalytic = (req, res) => {
    const { id } = req.params;
    const { AnalysisDate, SalesTrends, DemandForecasting, CustomerDemographics } = req.body;
    db.query('UPDATE Data_Analytics SET AnalysisDate = ?, SalesTrends = ?, DemandForecasting = ?, CustomerDemographics = ? WHERE AnalyticsID = ?', 
    [AnalysisDate, SalesTrends, DemandForecasting, CustomerDemographics, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to update data analytic' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Data analytic not found' });
        } else {
            res.json({ message: 'Data analytic updated successfully' });
        }
    });
};

// Delete an analytic
exports.deleteAnalytic = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Data_Analytics WHERE AnalyticsID = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to delete data analytic' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Data analytic not found' });
        } else {
            res.json({ message: 'Data analytic deleted successfully' });
        }
    });
};