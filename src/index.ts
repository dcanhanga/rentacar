import express from 'express';

const be = (a: number, b: number): number => {
  return a + b;
};
be(1, 2);
const app = express();

const port = 3333;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(` Server is 🚀 on port  http://localhost:${port}`);
});
