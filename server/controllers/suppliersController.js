// server/controllers/suppliersController.js
const db = require('../db');

// Get all suppliers
exports.getSuppliers = (req, res) => {
    db.query('SELECT * FROM Suppliers', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to retrieve suppliers' });
        } else {
            res.json(results);
        }
    });
};

// Get a specific supplier by ID
exports.getSupplierById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM Suppliers WHERE SupplierID = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to retrieve supplier' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Supplier not found' });
        } else {
            res.json(results[0]);
        }
    });
};

// Add a new supplier
exports.addSupplier = (req, res) => {
    const { Name, ContactInfo, DeliveryTimes } = req.body;
    db.query('INSERT INTO Suppliers (Name, ContactInfo, DeliveryTimes) VALUES (?, ?, ?)', 
    [Name, ContactInfo, DeliveryTimes], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to add supplier' });
        } else {
            res.status(201).json({ message: 'Supplier added successfully', SupplierID: results.insertId });
        }
    });
};

// Update an existing supplier
exports.updateSupplier = (req, res) => {
    const { id } = req.params;
    const { Name, ContactInfo, DeliveryTimes } = req.body;
    db.query('UPDATE Suppliers SET Name = ?, ContactInfo = ?, DeliveryTimes = ? WHERE SupplierID = ?', 
    [Name, ContactInfo, DeliveryTimes, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to update supplier' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Supplier not found' });
        } else {
            res.json({ message: 'Supplier updated successfully' });
        }
    });
};

// Delete a supplier
exports.deleteSupplier = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Suppliers WHERE SupplierID = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to delete supplier' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Supplier not found' });
        } else {
            res.json({ message: 'Supplier deleted successfully' });
        }
    });
};