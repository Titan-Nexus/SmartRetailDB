-- database/schema.sql
-- Create Products table
CREATE TABLE Products (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Category VARCHAR(255) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    StockLevel INT NOT NULL,
    SupplierID INT,
    LastUpdated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)
);

-- Create Suppliers table
CREATE TABLE Suppliers (
    SupplierID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    ContactInfo VARCHAR(255) NOT NULL,
    DeliveryTimes VARCHAR(255) NOT NULL
);

-- Create Sales table
CREATE TABLE Sales (
    SaleID INT AUTO_INCREMENT PRIMARY KEY,
    ProductID INT,
    EmployeeID INT,
    Date DATETIME NOT NULL,
    Quantity INT NOT NULL,
    TotalAmount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
);

-- Create Customers table
CREATE TABLE Customers (
    CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    ContactDetails VARCHAR(255) NOT NULL,
    LoyaltyPoints INT DEFAULT 0
);

-- Create Employees table
CREATE TABLE Employees (
    EmployeeID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Role VARCHAR(255) NOT NULL,
    ShiftSchedule VARCHAR(255) NOT NULL
);

-- Create Transactions table
CREATE TABLE Transactions (
    TransactionID INT AUTO_INCREMENT PRIMARY KEY,
    SaleID INT,
    PaymentMethod VARCHAR(255) NOT NULL,
    Amount DECIMAL(10, 2) NOT NULL,
    Date DATETIME NOT NULL,
    FOREIGN KEY (SaleID) REFERENCES Sales(SaleID)
);

-- Financial Reports Table
CREATE TABLE Financial_Reports (
    ReportID INT PRIMARY KEY AUTO_INCREMENT,
    ReportDate DATE,
    TotalSales DECIMAL(10, 2),
    TotalExpenses DECIMAL(10, 2),
    ProfitMargin DECIMAL(10, 2)
);

-- Data Analytics Table
CREATE TABLE Data_Analytics (
    AnalyticsID INT PRIMARY KEY AUTO_INCREMENT,
    AnalysisDate DATE,
    SalesTrends TEXT,
    DemandForecasting TEXT,
    CustomerDemographics TEXT
);