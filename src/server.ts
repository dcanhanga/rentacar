import express from 'express';

const app = express();
app.use(express.json());
app.post('/courses', (request, response) => {
  console.log(request.body);
  return response.json({ name });
});

const port = 3333;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(` Server is 🚀 on port  http://localhost:${port}`);
});
