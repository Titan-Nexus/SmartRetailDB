// server/controllers/transactionsController.js
const db = require('../db');

// Get all transactions
exports.getTransactions = (req, res) => {
    db.query('SELECT * FROM Transactions', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to retrieve transactions' });
        } else {
            res.json(results);
        }
    });
};

// Get a specific transaction by ID
exports.getTransactionById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM Transactions WHERE TransactionID = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to retrieve transaction' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Transaction not found' });
        } else {
            res.json(results[0]);
        }
    });
};

// Add a new transaction
exports.addTransaction = (req, res) => {
    const { SaleID, PaymentMethod, Amount, Date } = req.body;
    db.query('INSERT INTO Transactions (SaleID, PaymentMethod, Amount, Date) VALUES (?, ?, ?, ?)', 
    [SaleID, PaymentMethod, Amount, Date], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to add transaction' });
        } else {
            res.status(201).json({ message: 'Transaction added successfully', TransactionID: results.insertId });
        }
    });
};

// Update an existing transaction
exports.updateTransaction = (req, res) => {
    const { id } = req.params;
    const { SaleID, PaymentMethod, Amount, Date } = req.body;
    db.query('UPDATE Transactions SET SaleID = ?, PaymentMethod = ?, Amount = ?, Date = ? WHERE TransactionID = ?', 
    [SaleID, PaymentMethod, Amount, Date, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to update transaction' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Transaction not found' });
        } else {
            res.json({ message: 'Transaction updated successfully' });
        }
    });
};

// Delete an existing transaction
exports.deleteTransaction = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Transactions WHERE TransactionID = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to delete transaction' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Transaction not found' });
        } else {
            res.json({ message: 'Transaction deleted successfully' });
        }
    });
};