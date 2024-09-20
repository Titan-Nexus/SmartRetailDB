const express = require('express');
const app = express();
const productsRoutes = require('./routes/productsRoutes');
const suppliersRoutes = require('./routes/suppliersRoutes');
const salesRoutes = require('./routes/salesRoutes');
const customersRoutes = require('./routes/customersRoutes');
const employeesRoutes = require('./routes/employeesRoutes');
const transactionsRoutes = require('./routes/transactionsRoutes');
const dataAnalyticsRoutes = require('./routes/dataAnalyticsRoutes');
const financialReportsRoutes = require('./routes/financialReportsRoutes');

app.use(express.json());
app.use('/products', productsRoutes);
app.use('/suppliers', suppliersRoutes);
app.use('/sales', salesRoutes);
app.use('/customers', customersRoutes);
app.use('/employees', employeesRoutes);
app.use('/transactions', transactionsRoutes);
app.use('/data-analytics', dataAnalyticsRoutes);
app.use('/financial-reports', financialReportsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});