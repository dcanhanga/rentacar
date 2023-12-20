import express from 'express';

import { MESSAGE, PORT } from './config';

const app = express();

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(MESSAGE);
});
