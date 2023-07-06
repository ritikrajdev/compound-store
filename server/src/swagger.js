const path = require('path');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Compound Storage Api',
    version: '0.0.1',
    description: 'Compound Storage Api',
  },
};

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, 'routes/api/**/*.js')],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = {swaggerSpec};