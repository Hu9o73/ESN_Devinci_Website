import express, { Express } from "express";
import https from 'https';
import fs from 'fs';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


// Import endpoints
import basicEndpoints from "./api/utilityEndpoints";
import authEndpoints from "./api/routes/auth";
import memberEndpoints from "./api/memberEndpoints";
import bureauEndpoints from "./api/bureauEndpoints";
import eventEndpoints from "./api/routes/events";

// Import database
import sequelize from "./ConfigFiles/dbConfig";
import { testDatabaseConnection } from "./ConfigFiles/dbUtils";

const cors = require('cors');

const app: Express = express();
const port = 3000;

const isProd = false;

// Body parser
app.use(express.json());

// CORS for any origin: 
// app.use(cors());

// CORS for specific origins
app.use(cors({
  origin: ['http://localhost:4200', 'https://esn.hugobnl.fr', 'https://www.esn.hugobnl.fr'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // Swagger version
    info: {
      title: 'API Documentation',
      version: '0.0.11',
      description: 'API documentation for the backend',
    },
  },
  apis: ['./src/api/apiAnnotations.ts'], // Path to the API route files (can be specific files or directories)
};

// Use the endpoints defined
app.use(basicEndpoints);
app.use(authEndpoints);
app.use(memberEndpoints);
app.use(bureauEndpoints);
app.use(eventEndpoints);

// Serve Swagger UI at /api-docs
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



// Database test connection
testDatabaseConnection(sequelize);

if(isProd){
  const options = {
    key: fs.readFileSync('[REPLACE ME]'),
    cert: fs.readFileSync('[REPLACE ME]'),
  };
  // Start the HTTPS server
  https.createServer(options, app).listen(port, () => {
    console.log(`[server]: HTTPS server is running at https://localhost:${port}`);
  });


}else{
  // Server running ?
  app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
}

