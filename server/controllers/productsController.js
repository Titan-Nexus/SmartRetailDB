// server/controllers/productsController.js
const db = require('../db');

// Get all products
exports.getProducts = (req, res) => {
    db.query('SELECT * FROM Products', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to retrieve products' });
        } else {
            res.json(results);
        }
    });
};

// Get a specific product by ID
exports.getProductById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM Products WHERE ProductID = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to retrieve product' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Product not found' });
        } else {
            res.json(results[0]);
        }
    });
};

// Add a new product
exports.addProduct = (req, res) => {
    const { Name, Category, Price, StockLevel, SupplierID } = req.body;
    db.query('INSERT INTO Products (Name, Category, Price, StockLevel, SupplierID) VALUES (?, ?, ?, ?, ?)', 
    [Name, Category, Price, StockLevel, SupplierID], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to add product' });
        } else {
            res.status(201).json({ message: 'Product added successfully', ProductID: results.insertId });
        }
    });
};

// Update an existing product
exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const { Name, Category, Price, StockLevel, SupplierID } = req.body;
    db.query('UPDATE Products SET Name = ?, Category = ?, Price = ?, StockLevel = ?, SupplierID = ? WHERE ProductID = ?', 
    [Name, Category, Price, StockLevel, SupplierID, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to update product' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Product not found' });
        } else {
            res.json({ message: 'Product updated successfully' });
        }
    });
};

// Delete a product
exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Products WHERE ProductID = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to delete product' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Product not found' });
        } else {
            res.json({ message: 'Product deleted successfully' });
        }
    });
};