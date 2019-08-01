const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { Client } = require('@elastic/elasticsearch');

// Elastic
const client = new Client({
  node: 'http://localhost:9200',
  log: 'trace',
});
client.ping({}, {
  requestTimeout: 3000,
})
  .then(console.log('Elasticsearch connected on port 9200'))
  .catch(err => console.log(err));

// check if Elastic index exists and create mappings if not
client.indices.exists({ index: 'items' }).then((index) => {
  if (!index) {
    client.indices.create({
      index: 'items',
      body: {
        mappings: {
          properties: {
            id: { type: 'integer' },
            name: { type: 'keyword' },
            description: { type: 'text' },
            fabric: { type: 'object' },
            care: { type: 'object' },
            features: { type: 'object' },
            colors: { type: 'nested' },
            price: { type: 'text' },
          },
        },
      },
    })
      .then(console.log('index "items" created'))
      .catch(err => console.log(err));
  }
});

// Express
const app = express();
const PORT = 3002;
app.use('/:id', express.static('./client/dist'));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


// REST api
app.get('/api/itemSummary/id/:id', (req, res) => {
  const { id } = req.params;
  client.search({
    index: 'items',
    q: `id:${id}`,
  }).then((results) => {
    res.status(200).json(results.body.hits.hits[0]._source);
  })
    .catch(err => res.status(400).json(err));
});

app.get('/api/itemSummary/name/:name', (req, res) => {
  const { name } = req.params;
  client.search({ index: 'items', q: { name } })
    .then((results) => {
      res.status(200).send(results);
    })
    .catch(err => res.status(400).json(err));
});

app.post('/api/itemSummary/', (req, res) => {
  const { body } = req;
  client.create({ index: 'items', body })
    .then((results) => {
      res.status(201).send(results);
    })
    .catch(err => res.status(400).send(err));
});

app.put('/api/itemSummary/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  client.updateByQuery({ index: 'items', q: id, body })
    .then((results) => {
      res.status(202).send(results);
    })
    .catch(err => res.status(400).json(err));
});

app.delete('/api/itemSummary/:id', (req, res) => {
  const { id } = req.params;
  client.deleteByQuery({ index: 'items', q: { id } })
    .then((results) => {
      res.status(202).send(results);
    })
    .catch(err => res.status(400).json(err));
});
