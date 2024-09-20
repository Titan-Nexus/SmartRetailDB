// server/db.js
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ComfortablePanda1693',
    database: 'smartretaildb'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
});

module.exports = connection;