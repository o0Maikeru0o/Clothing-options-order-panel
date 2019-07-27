const express = require('express');
const db = require('../database/index.js');

const app = express();
const PORT = 3002;

app.use('/:id', express.static('./client/dist'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/api/itemSummary/id/:id', (req, res) => {
  const { id } = req.params;
  db.readId(id)
    .then((results) => {
      console.log('results', results);
      res.status(200).send(results);
    })
    .catch(err => res.status(400).json(err));
});

// app.get('/api/itemSummary/name/:name', (req, res) => {
//   const { name } = req.params;

//   db.readName(name)
//     .then((results) => {
//       res.status(200).send(results);
//     })
//     .catch(err => res.status(400).json(err));
// });

app.post('/api/itemSummary/:id', (req, res) => {
  const { id } = req.params;
  const newItem = req.body;
  db.create(id, newItem)
    .then((results) => {
      res.status(201).send(results);
    })
    .catch(err => res.status(400).json(err));
});

app.put('/api/itemSummary/:id', (req, res) => {
  const { id } = req.params;
  const revision = req.body;
  db.update(id, revision)
    .then((results) => {
      res.status(202).send(results);
    })
    .catch(err => res.status(400).json(err));
});

app.delete('/api/itemSummary/:id', (req, res) => {
  const { id } = req.params;
  db.delete(id)
    .then((results) => {
      res.status(202).send(results);
    })
    .catch(err => res.status(400).json(err));
});
