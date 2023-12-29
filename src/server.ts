import express from 'express';

import { url, serve, setup } from './docs';
import { router } from '@app/routes';

const app = express();
const port = 3033;
app.use(express.json());
app.use(url, serve, setup);
app.use(router);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(` Server is 🚀 on port  http://localhost:${port}`);
});
