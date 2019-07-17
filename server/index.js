const express = require('express');
const db = require('../database/index.js');

const app = express();
const PORT = 3002;

app.use('/:id', express.static('./client/dist'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/api/itemSummary/:id', (req, res) => {
  const { id } = req.params;
  // console.log(req.params);
  db.getSingleItem(id)
    .then((results) => {
      res.end(JSON.stringify(results));
    })
    .catch(err => console.log('Promise rejection error ', err));
});
