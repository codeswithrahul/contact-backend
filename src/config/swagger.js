const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Parlour Contact & Review API',
      version: '1.0.0',
      description: 'API documentation for parlour contact forms, reviews, and sales team notes management',
      contact: {
        name: 'API Support',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    tags: [
      {
        name: 'Parlour Contact',
        description: 'Contact form submissions and notes management',
      },
      {
        name: 'Parlour Review',
        description: 'Customer reviews with ratings and notes management',
      },
      {
        name: 'Users',
        description: 'User management endpoints',
      },
      {
        name: 'Contacts',
        description: 'General contact endpoints',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Path to the API routes
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
