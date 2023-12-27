import express from 'express';

import { router } from '@app/routes';

const app = express();

app.use(express.json());
app.use(router);
const port = 3033;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(` Server is 🚀 on port  http://localhost:${port}`);
});
