import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    host: 'localhost',            // MySQL server (PostgreSQL was localhost, MySQL is typically localhost too)
    dialect: 'mysql',             // Database dialect for MySQL
    database: 'esndb',   // Database name (can remain the same)
    username: 'root',   // Database username (should be a MySQL user)
    password: 'root',             // Database password (ensure this is correct for MySQL)
    logging: false               // Disable logging SQL queries to console (optional)
});

export default sequelize;
