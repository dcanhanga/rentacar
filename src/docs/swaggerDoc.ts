import { type JsonObject } from 'swagger-ui-express';

import { categories } from './routes/categories';
export const swaggerDoc: JsonObject = {
  openapi: '3.0.0',
  info: {
    title: 'RentaCar Documentation',
    description: 'This is an API Rent',
    contact: {
      email: 'canhanga96@gmail.com'
    }
  },
  paths: {
    ...categories
  }
};
