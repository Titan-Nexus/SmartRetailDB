// server/controllers/customersController.js
const db = require('../db');

// Get all customers
exports.getCustomers = (req, res) => {
    db.query('SELECT * FROM Customers', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to retrieve customers' });
        } else {
            res.json(results);
        }
    });
};

// Get a specific customer by ID
exports.getCustomerById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM Customers WHERE CustomerID = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to retrieve customer' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Customer not found' });
        } else {
            res.json(results[0]);
        }
    });
};

// Add a new customer
exports.addCustomer = (req, res) => {
    const { Name, ContactDetails, LoyaltyPoints } = req.body;
    db.query('INSERT INTO Customers (Name, ContactDetails, LoyaltyPoints) VALUES (?, ?, ?)', 
    [Name, ContactDetails, LoyaltyPoints], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to add customer' });
        } else {
            res.status(201).json({ message: 'Customer added successfully', CustomerID: results.insertId });
        }
    });
};

// Update an existing customer
exports.updateCustomer = (req, res) => {
    const { id } = req.params;
    const { Name, ContactDetails, LoyaltyPoints } = req.body;
    db.query('UPDATE Customers SET Name = ?, ContactDetails = ?, LoyaltyPoints = ? WHERE CustomerID = ?', 
    [Name, ContactDetails, LoyaltyPoints, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to update customer' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Customer not found' });
        } else {
            res.json({ message: 'Customer updated successfully' });
        }
    });
};

// Delete a customer
exports.deleteCustomer = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Customers WHERE CustomerID = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to delete customer' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Customer not found' });
        } else {
            res.json({ message: 'Customer deleted successfully' });
        }
    });
};