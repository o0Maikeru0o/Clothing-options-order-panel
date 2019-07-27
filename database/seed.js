const faker = require('faker');
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'maikeru',
    password: 'SDCpostgres',
    database: 'item_summary',
  },
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
    colorOptions.push({
      colorName: faker.commerce.color(),
      sizes: sizeOptions(),
    });
  } return colorOptions;
};

const generateFakeItem = () => {
  const item = {
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    fabric: JSON.stringify({
      fabricName: faker.commerce.productMaterial(),
      fabricDescription: faker.lorem.sentence(),
      fabricFeatures: selectHowManyFrom(3, null, faker.commerce.productAdjective),
    }),
    care: selectHowManyFrom(3, care),
    features: JSON.stringify({
      designedFor: selectHowManyFrom(2, designedFor),
      fit: selectHowManyFrom(2, fit),
    }),
    colors: JSON.stringify(colors()),
    price: faker.commerce.price(5, 1000, 2, '$'),
  };
  return item;
};

const seed = async () => {
  console.log('Seeding begun', `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
  let completion = 0;
  await knex.raw('TRUNCATE TABLE items RESTART IDENTITY CASCADE');

  let fakeItems = [];
  for (let i = 1; i <= 10000000; i += 1) {
    fakeItems.push(generateFakeItem());
    if (i % 25 === 0) {
      completion += 2500000;
      console.log(`${completion}% complete`);
    }
    if (i % 10 === 0) {
      await knex('items').insert(fakeItems);
      fakeItems = [];
    }
  }
  console.log('Seeding complete', `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
};
seed();


module.exports = {
  seed,
  generateFakeItem,
};
