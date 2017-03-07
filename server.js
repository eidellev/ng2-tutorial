'use strict';

const express = require('express');
const app = express();

app.get('/products', (req, res) => {
  res.sendFile(`${__dirname}/products/products.json`);
});

app.listen(3001, () => {
  console.info('Server running on port 3001');
});
