const apm = require('elastic-apm-node').start();
const axios = require('axios');
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
client.indices.exists({ index: 'clothes' }).then((index) => {
  if (!index) {
    client.indices.create({
      index: 'clothing',
      body: {
        settings: {
          index: {
            'sort.field': 'id',
            'sort.order': 'desc',
          },
        },
        mappings: {
          properties: {
            id: { type: 'keyword' },
          },
        },
      },
    })
      .then(console.log('index "clothes" created'))
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
app.get('/api/itemSummary/:id', (req, res) => {
  const { id } = req.params;
  client.search({
    index: 'clothing',
    q: `id:${id}`,
  }).then((results) => {
    res.status(200).json(results.body.hits.hits[0]._source);
  })
    .catch(err => res.status(400).json(err));
});

// app.get('/api/itemSummary/routing/:id/:routing', (req, res) => {
//   const { id, routing } = req.params;
//   client.get({
//     index: 'clothing',
//     type: '_doc',
//     id,
//     routing,
//   }, (error, response) => { if (error) { res.send(error); } else { res.send(response.body._source); } });
// });

app.get('/api/itemSummary/name/:name', (req, res) => {
  const { name } = req.params;
  client.search({ index: 'clothing', q: { name } })
    .then((results) => {
      res.status(200).send(results);
    })
    .catch(err => res.status(400).json(err));
});

app.post('/api/itemSummary/:id', (req, res) => {
  const { body } = req;
  console.log(body);
  client.index({ index: 'clothing', body }, (error, response) => {
    if (error) { res.status(400).send(error); } else { res.status(201).send(response.body.result); }
  });
});

app.put('/api/itemSummary/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  client.updateByQuery({ index: 'clothing', q: id, body }, (error, response) => {
    if (error) { res.status(400).send(error); } else { res.status(202).send(response.body.result); }
  });
});

app.delete('/api/itemSummary/:id', (req, res) => {
  const { id } = req.params;
  client.deleteByQuery({ index: 'clothing', q: { id } }, (error, response) => {
    if (error) { res.status(400).send(error); } else { res.status(204).send(response.body.result); }
  });
});
