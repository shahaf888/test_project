import express from 'express';
import { getData } from './utils';

const app = express();
const port = 3000;

app.get('/data/:key', (req, res) => {
  const key = req.params.key;
  res.json({ result: getData(key) });
});

app.listen(port, () => {
  console.log(`HTTP server listening at http://localhost:${port}`);
});