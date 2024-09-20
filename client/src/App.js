import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FinancialReports from './components/FinancialReports/FinancialReports';
import Products from './components/Products/Products';
import Suppliers from './components/Suppliers/Suppliers';
import Sales from './components/Sales/Sales';
import Customers from './components/Customers/Customers';
import Employees from './components/Employees/Employees';
import Transactions from './components/Transactions/Transactions';
import DataAnalytics from './components/DataAnalytics/DataAnalytics';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Routes>
          <Route path="/financial-reports" element={<FinancialReports />} />
          <Route path="/products" element={<Products />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/data-analytics" element={<DataAnalytics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;