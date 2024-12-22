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
    Role VARCHAR(255)					   -- Role inside of ESN Association
);