// server/controllers/salesController.js
const db = require('../db');

// Get all sales
exports.getSales = (req, res) => {
    db.query('SELECT * FROM Sales', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to retrieve sales' });
        } else {
            res.json(results);
        }
    });
};

// Get a specific sale by ID
exports.getSaleById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM Sales WHERE SaleID = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to retrieve sale' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Sale not found' });
        } else {
            res.json(results[0]);
        }
    });
};

// Add a new sale
exports.addSale = (req, res) => {
    const { ProductID, EmployeeID, Date, Quantity, TotalAmount } = req.body;
    db.query('INSERT INTO Sales (ProductID, EmployeeID, Date, Quantity, TotalAmount) VALUES (?, ?, ?, ?, ?)', 
    [ProductID, EmployeeID, Date, Quantity, TotalAmount], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to add sale' });
        } else {
            res.status(201).json({ message: 'Sale added successfully', SaleID: results.insertId });
        }
    });
};

// Update an existing sale
exports.updateSale = (req, res) => {
    const { id } = req.params;
    const { ProductID, EmployeeID, Date, Quantity, TotalAmount } = req.body;
    db.query('UPDATE Sales SET ProductID = ?, EmployeeID = ?, Date = ?, Quantity = ?, TotalAmount = ? WHERE SaleID = ?', 
    [ProductID, EmployeeID, Date, Quantity, TotalAmount, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to update sale' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Sale not found' });
        } else {
            res.json({ message: 'Sale updated successfully' });
        }
    });
};

// Delete a sale
exports.deleteSale = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Sales WHERE SaleID = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to delete sale' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Sale not found' });
        } else {
            res.json({ message: 'Sale deleted successfully' });
        }
    });
};