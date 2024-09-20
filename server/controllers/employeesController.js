// server/controllers/employeesController.js
const db = require('../db');

// Get all employees
exports.getEmployees = (req, res) => {
    db.query('SELECT * FROM Employees', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to retrieve employees' });
        } else {
            res.json(results);
        }
    });
};

// Get a specific employee by ID
exports.getEmployeeById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM Employees WHERE EmployeeID = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to retrieve employee' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Employee not found' });
        } else {
            res.json(results[0]);
        }
    });
};

// Add a new employee
exports.addEmployee = (req, res) => {
    const { Name, Role, ShiftSchedule } = req.body;
    db.query('INSERT INTO Employees (Name, Role, ShiftSchedule) VALUES (?, ?, ?)', 
    [Name, Role, ShiftSchedule], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to add employee' });
        } else {
            res.status(201).json({ message: 'Employee added successfully', EmployeeID: results.insertId });
        }
    });
};

// Update an existing employee
exports.updateEmployee = (req, res) => {
    const { id } = req.params;
    const { Name, Role, ShiftSchedule } = req.body;
    db.query('UPDATE Employees SET Name = ?, Role = ?, ShiftSchedule = ? WHERE EmployeeID = ?', 
    [Name, Role, ShiftSchedule, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to update employee' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Employee not found' });
        } else {
            res.json({ message: 'Employee updated successfully' });
        }
    });
};

// Delete an employee
exports.deleteEmployee = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Employees WHERE EmployeeID = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to delete employee' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Employee not found' });
        } else {
            res.json({ message: 'Employee deleted successfully' });
        }
    });
};