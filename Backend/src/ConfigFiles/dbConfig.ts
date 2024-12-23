import { Sequelize } from 'sequelize';

require('dotenv').config();

const sequelize = new Sequelize({
    host: process.env.DB_HOST,            // MySQL server (PostgreSQL was localhost, MySQL is typically localhost too)
    dialect: 'mysql',             // Database dialect for MySQL
    database: process.env.DB_DATABASE,   // Database name (can remain the same)
    username: process.env.DB_USER,   // Database username (should be a MySQL user)
    password: process.env.DB_PASSWORD,             // Database password (ensure this is correct for MySQL)
    logging: false               // Disable logging SQL queries to console (optional)
});

export default sequelize;
