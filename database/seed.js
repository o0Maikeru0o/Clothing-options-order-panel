/* eslint-disable no-await-in-loop */
const faker = require('faker');
const fs = require('fs');
const json2csv = require('json2csv');
const { Client } = require('@elastic/elasticsearch');

// Postgres connection
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'maikeru',
    password: 'SDCpostgres',
    database: 'item_summary',
  },
});

// Elastic connection
const client = new Client({
  node: 'http://localhost:9200',
  log: 'trace',
});

// Options arrays
const care = ['Machine wash cold', 'Do not bleach', 'Tumble dry low', 'Do not iron', 'Do not dry clean', 'Imported', 'Wash with like colors'];
const designedFor = ['Office', 'Travel', 'Commute', 'Exercise'];
const fit = ['Relaxed fit', 'Hip Length', 'Slim Fit'];

// Helper functions
const selectHowManyFrom = (num, arr, fakerFunc) => {
  const result = [];
  for (let i = 0; i < num; i++) {
    if (!fakerFunc) {
      result.push(faker.random.arrayElement(arr));
    } else {
      result.push(fakerFunc());
    }
  }
  return result;
};

const sizeOptions = () => {
  const sizes = [];
  for (let j = 0; j < 13; j += 2) {
    sizes.push({ size: j, stock: faker.random.number(100) });
  }
  return sizes;
};

const colors = () => {
  const colorOptions = [];
  for (let i = 0; i < 3; i++) {
    const colorName = faker.commerce.color();
    colorOptions.push({
      colorName: colorName.charAt(0).toUpperCase() + colorName.slice(1),
      sizes: sizeOptions(),
    });
  } return colorOptions;
};

// Create randomized item
const generateFakeItem = (id) => {
  const item = {
    id,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    fabric: {
      fabricName: faker.commerce.productMaterial(),
      fabricDescription: faker.lorem.sentence(),
      fabricFeatures: selectHowManyFrom(3, null, faker.commerce.productAdjective),
    },
    care: selectHowManyFrom(3, care),
    features: {
      designedFor: selectHowManyFrom(2, designedFor),
      fit: selectHowManyFrom(2, fit),
    },
    colors: colors(),
    price: faker.commerce.price(5.00, 1000.00, 2, '$'),
  };
  const json = JSON.stringify(item);
  return json;
};

// Seeding fucntions
const seedToPG = async () => {
  console.log('Seeding begun', `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
  let completion = 0;
  await knex.raw('TRUNCATE TABLE items RESTART IDENTITY CASCADE');

  let fakeItems = [];
  for (let i = 1; i <= 10000000; i += 1) {
    fakeItems.push(generateFakeItem());
    if (i % 2500000 === 0) {
      completion += 25;
      console.log(`${completion}% complete`);
    }
    if (i % 10000 === 0) {
      await knex.batchInsert('items', fakeItems, 1000);
      fakeItems = [];
    }
  }
  console.log('Seeding complete', `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
};
// seedToPG();

const seedToCSV = async () => {
  let fakeItems = [];
  let completion = 0;
  let csv;
  console.log('Seeding begun', `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
  for (let i = 1; i <= 10000000; i += 1) {
    fakeItems.push(generateFakeItem(i));
    if (i % 2500000 === 0) {
      completion += 25;
      console.log(`${completion}% complete`);
    }
    if (i % 10000 === 0) {
      if (i === 10000) {
        csv = json2csv.parse(fakeItems, { delimiter: ';' });
        await fs.appendFileSync('data.csv', `${csv}\n`);
      } else {
        csv = json2csv.parse(fakeItems, { delimiter: ';', header: false });
        await fs.appendFileSync('data.csv', `${csv}\n`);
        fakeItems = [];
      }
    }
  }
  console.log('Seeding complete', `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
};
// seedToCSV()
//   .catch(err => console.log(err));

const seedToES = async () => {
  console.log('Seeding begun', `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
  let completion = 0;
  // Clear current DB
  await client.indices.delete({
    index: '_all',
  })
    .then(console.log('indices deleted'))
    .catch(err => console.log(err));

  let fakeItems = [];
  for (let i = 1; i <= 10000000; i += 1) {
    // Create NDJSON
    fakeItems.push(`{ "index": {} }}\n${generateFakeItem(i)}\n`);
    if (i % 500000 === 0) {
      completion += 5;
      console.log(`${completion}% complete`);
    }
    if (i % 10000 === 0) {
      await client.bulk({
        index: 'items',
        body: [...fakeItems],
      }).catch(err => console.log(err));
      fakeItems = [];
    }
  }
  console.log('Seeding complete', `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
};
seedToES()
  .catch(err => console.log(err));

module.exports = {
  seedToPG,
  seedToCSV,
  seedToES,
  generateFakeItem,
};
