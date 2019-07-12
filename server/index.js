const express = require('express');
const db = require('../database/index.js');

const app = express();
const PORT = 3002;

app.use('/:id', express.static('./client/dist'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/api/items', (req, res) => {
  console.log('received GET request at /api/items');
  db.getAllItems()
    .then((results) => {
      res.end(JSON.stringify(results));
    })
    .catch(err => console.log('promise rejection error ', err));
  // res.end("successfully sent GET to /api/items");
});

app.get('/api/:id', (req, res) => {
  const { id } = req.params;
  // console.log(req.params);
  db.getSingleItem(id)
    .then((results) => {
      res.end(JSON.stringify(results));
    })
    .catch(err => console.log('Promise rejection error ', err));
});
