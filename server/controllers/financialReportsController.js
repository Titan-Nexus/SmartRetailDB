// server/controllers/financialReportsController.js
const db = require('../db');

// Get all financial reports
exports.getFinancialReports = (req, res) => {
    db.query('SELECT * FROM Financial_Reports', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to retrieve financial reports' });
        } else {
            res.json(results);
        }
    });
};

// Get a specific financial report by ID
exports.getFinancialReportById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM Financial_Reports WHERE ReportID = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to retrieve financial report' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Financial report not found' });
        } else {
            res.json(results[0]);
        }
    });
};

// Add a new financial report
exports.addFinancialReport = (req, res) => {
    const { ReportDate, TotalSales, TotalExpenses, ProfitMargin } = req.body;
    db.query('INSERT INTO Financial_Reports (ReportDate, TotalSales, TotalExpenses, ProfitMargin) VALUES (?, ?, ?, ?)', 
    [ReportDate, TotalSales, TotalExpenses, ProfitMargin], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to add financial report' });
        } else {
            res.status(201).json({ message: 'Financial report added successfully', ReportID: results.insertId });
        }
    });
};

// Update an existing financial report
exports.updateFinancialReport = (req, res) => {
    const { id } = req.params;
    const { ReportDate, TotalSales, TotalExpenses, ProfitMargin } = req.body;
    db.query('UPDATE Financial_Reports SET ReportDate = ?, TotalSales = ?, TotalExpenses = ?, ProfitMargin = ? WHERE ReportID = ?', 
    [ReportDate, TotalSales, TotalExpenses, ProfitMargin, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to update financial report' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Financial report not found' });
        } else {
            res.json({ message: 'Financial report updated successfully' });
        }
    });
};

// Delete a financial report
exports.deleteFinancialReport = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Financial_Reports WHERE ReportID = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to delete financial report' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Financial report not found' });
        } else {
            res.json({ message: 'Financial report deleted successfully' });
        }
    });
};