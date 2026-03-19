-- Run this once in phpMyAdmin SQL tab to create all tables

CREATE DATABASE IF NOT EXISTS vatmaster_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE vatmaster_db;

CREATE TABLE IF NOT EXISTS whatsapp_global_schedule (
    id         INT AUTO_INCREMENT PRIMARY KEY,
    day        VARCHAR(20)  NOT NULL UNIQUE,
    name       VARCHAR(100) NOT NULL,
    number     VARCHAR(30)  NOT NULL,
    message    TEXT         NOT NULL,
    status     ENUM('active','inactive') DEFAULT 'active',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT IGNORE INTO whatsapp_global_schedule (day, name, number, message, status) VALUES
('Monday',    'Sales Support',  '+971501234567', 'Hello, VAT Master, We are looking for VAT Services.', 'active'),
('Tuesday',   'Tax Consultant', '+971521234567', 'Hello, VAT Master, We are looking for VAT Services.', 'active'),
('Wednesday', 'Billing Dept',   '+971551234567', 'Hello, VAT Master, We are looking for VAT Services.', 'active'),
('Thursday',  'General Info',   '+971581234567', 'Hello, VAT Master, We are looking for VAT Services.', 'active'),
('Friday',    'Sales Support',  '+971501234567', 'Hello, VAT Master, We are looking for VAT Services.', 'active'),
('Saturday',  'Sales Support',  '+971501234567', 'Hello, VAT Master, We are looking for VAT Services.', 'active'),
('Sunday',    'Sales Support',  '+971501234567', 'Hello, VAT Master, We are looking for VAT Services.', 'active');

CREATE TABLE IF NOT EXISTS whatsapp_overrides (
    id         INT AUTO_INCREMENT PRIMARY KEY,
    path       VARCHAR(255) NOT NULL UNIQUE,
    name       VARCHAR(100) NOT NULL,
    number     VARCHAR(30)  NOT NULL,
    message    TEXT         NOT NULL,
    status     ENUM('active','inactive') DEFAULT 'active',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS pricing_services (
    id             INT AUTO_INCREMENT PRIMARY KEY,
    service_id     VARCHAR(100) NOT NULL UNIQUE,
    name           VARCHAR(200) NOT NULL,
    price          VARCHAR(20)  NOT NULL,
    original_price VARCHAR(20)  NOT NULL,
    currency       VARCHAR(10)  DEFAULT 'AED',
    status         ENUM('active','inactive') DEFAULT 'active',
    updated_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT IGNORE INTO pricing_services (service_id, name, price, original_price, currency, status) VALUES
('vat-return-micro',   'VAT Return Filing - Micro',           '499',  '999',  'AED', 'active'),
('vat-return-small',   'VAT Return Filing - Small',           '999',  '1999', 'AED', 'active'),
('vat-return-medium',  'VAT Return Filing - Medium',          '1499', '2999', 'AED', 'active'),
('vat-reg-single',     'VAT Registration - Single',           '125',  '499',  'AED', 'active'),
('vat-reg-promo',      'VAT Registration - Promo',            '99',   '299',  'AED', 'active'),
('vat-reg-group',      'VAT Registration - Group',            '499',  '999',  'AED', 'active'),
('accounting-micro',   'Accounting & Bookkeeping - Micro',    '499',  '1499', 'AED', 'active'),
('accounting-small',   'Accounting & Bookkeeping - Small',    '999',  '2499', 'AED', 'active'),
('accounting-medium',  'Accounting & Bookkeeping - Medium',   '1499', '3499', 'AED', 'active'),
('dereg-individual',   'VAT De-Registration - Individual',    '499',  '1499', 'AED', 'active'),
('dereg-group-3',      'VAT De-Registration - Group (3)',     '999',  '2499', 'AED', 'active'),
('dereg-group-5',      'VAT De-Registration - Group (5)',     '1499', '3499', 'AED', 'active'),
('corporate-tax-reg',  'Corporate Tax Registration',          '125',  '499',  'AED', 'active'),
('outsource-cfo',      'Outsource CFO',                       '499',  '999',  'AED', 'active'),
('vat-consultancy',    'VAT & TAX Consultancy',               '499',  '999',  'AED', 'active');

CREATE TABLE IF NOT EXISTS meta_pages (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    page_id     VARCHAR(100) NOT NULL UNIQUE,
    page        VARCHAR(100) NOT NULL,
    title       VARCHAR(255) NOT NULL,
    description TEXT         NOT NULL,
    keywords    TEXT         NOT NULL,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT IGNORE INTO meta_pages (page_id, page, title, description, keywords) VALUES
('home',             'Home Page',        'VAT Masters | Expert Tax Consultancy in UAE',         'VAT Masters provides expert VAT registration, corporate tax, and accounting services in UAE.', 'vat registration uae, corporate tax dubai'),
('corporate-tax',    'Corporate Tax',    'Corporate Tax Registration UAE | UAE Tax Consultants', 'Get your Corporate Tax registration done by FTA-certified experts.',                           'corporate tax uae'),
('vat-registration', 'VAT Registration', 'VAT Registration UAE | Fast & Easy Process',           'Register for VAT in UAE with ease. Our experts handle the paperwork.',                        'vat registration dubai'),
('accounting',       'Accounting',       'Accounting & Bookkeeping UAE | VAT Masters',           'Professional accounting and bookkeeping services for UAE businesses.',                        'accounting uae, bookkeeping dubai'),
('deregistration',   'De-Registration',  'VAT De-Registration UAE | VAT Masters',                'Fast VAT de-registration service in UAE handled by certified consultants.',                   'vat deregistration uae'),
('return-filing',    'Return Filing',    'VAT Return Filing UAE | VAT Masters',                  'Accurate and timely VAT return filing services for businesses in UAE.',                       'vat return filing uae');

CREATE TABLE IF NOT EXISTS categories (
    id         INT AUTO_INCREMENT PRIMARY KEY,
    name       VARCHAR(100) NOT NULL UNIQUE,
    slug       VARCHAR(120) NOT NULL UNIQUE,
    count      INT          DEFAULT 0,
    status     ENUM('Active','Hidden') DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT IGNORE INTO categories (name, slug, count, status) VALUES
('Legal Updates',   'legal-updates',   12, 'Active'),
('Tax Tutorials',   'tax-tutorials',    8, 'Active'),
('Business Growth', 'business-growth', 15, 'Active'),
('Uncategorized',   'uncategorized',    7, 'Hidden');

CREATE TABLE IF NOT EXISTS blog_posts (
    id         INT AUTO_INCREMENT PRIMARY KEY,
    title      VARCHAR(255) NOT NULL,
    author     VARCHAR(100) NOT NULL,
    category   VARCHAR(100) DEFAULT 'Uncategorized',
    status     ENUM('Published','Draft') DEFAULT 'Published',
    date       VARCHAR(30)  NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT IGNORE INTO blog_posts (title, author, category, status, date) VALUES
('New VAT Regulations in UAE 2026',   'Ahmed Al',   'Legal Updates',   'Published', 'Mar 15, 2026'),
('How to Register for Corporate Tax', 'Sarah Jane', 'Tax Tutorials',   'Draft',     'Mar 12, 2026'),
('Top 10 Tax Benefits for SMEs',      'John Smith', 'Business Growth', 'Published', 'Mar 10, 2026');

CREATE TABLE IF NOT EXISTS admin_users (
    id            INT AUTO_INCREMENT PRIMARY KEY,
    username      VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role          VARCHAR(50)  DEFAULT 'admin',
    created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
