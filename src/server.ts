import express from 'express';

import { routes } from './app/routes/index';

const app = express();

app.use(express.json());

app.use(routes);

const port = 3333;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(` Server is 🚀 on port  http://localhost:${port}`);
});
