-- Create the database
CREATE DATABASE ESNDB;

-- Use the newly created database
USE ESNDB;

-- Create the table with the required columns
CREATE TABLE users (
    Id INT AUTO_INCREMENT PRIMARY KEY,    -- Id column with auto-increment
    Nickname VARCHAR(255),                 -- Nickname as a string (can be adjusted in length)
    FirstName VARCHAR(255),                -- First Name as a string
    LastName VARCHAR(255),                 -- Last Name as a string
    Email VARCHAR(255),                    -- Email as a string
    Password VARCHAR(255),                 -- Hashed password as a string
    Year VARCHAR(10),                      -- Year as a string (e.g., "A4")
    Program VARCHAR(255),                  -- Program as a string (e.g., "Classic")
    School VARCHAR(255),                   -- School as a string (e.g., "ESILV")
    Role VARCHAR(255) DEFAULT "Member",	   -- Role inside of ESN Association
    
    -- For secured Authentication system (with JWT)
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE events (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(255) NOT NULL,
    Category VARCHAR(100),
    Description TEXT,
    Author INT NOT NULL,
    ImageLink VARCHAR(255),
    Active BOOLEAN DEFAULT True,
    
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (Author) REFERENCES users(Id) ON DELETE CASCADE ON UPDATE CASCADE
);