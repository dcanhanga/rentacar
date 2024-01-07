/* eslint-disable no-console */
import express, { type NextFunction, type Request, type Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import { ZodError } from 'zod';

import '@utils/container';

import { router } from '@app/routes';
import { url, serve, setup } from '@docs/config';
import { env } from '@utils/env';
import { AppError } from '@utils/errors/appError';

const app = express();

app.use(express.json());
app.use(url, serve, setup);
app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction): Response => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }
  if (error instanceof ZodError) {
    return response.status(400).json({ message: 'Validation error', issues: error.format() });
  }
  if (env.NODE_ENV !== 'production') {
    console.error(error);
  }
  return response
    .status(500)
    .json({ status: 'error', message: `Server Internal error ${error.message}` });
});

app.listen(env.PORT, () => {
  console.log(`Server is 🚀 on port  http://localhost:${env.PORT}`);
});
