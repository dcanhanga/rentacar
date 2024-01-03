/* eslint-disable no-console */
import express from 'express';
import 'reflect-metadata';

import '@utils/container';
import { router } from '@app/routes';
import { url, serve, setup } from '@docs/config';
import { env } from '@utils/env';

const app = express();

app.use(express.json());
app.use(url, serve, setup);
app.use(router);
app.listen(env.PORT, () => {
  console.log(`Server is 🚀 on port  http://localhost:${env.PORT}`);
});
