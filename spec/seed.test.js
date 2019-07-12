const db = require('../database/index.js');
const seed = require('../server/seed.js');

xdescribe('seed script', () => {
  let items;

  beforeAll(async () => {
    await db.clearTable();
    await seed.seed();
    await db.getAllItems().then(results => items = results);
  });

  test('Should insert 100 records into items table', () => {
    expect(items.length).toBe(100);
  });

  afterAll(async () => {
    await db.clearTable();
    await db.connection.end();
  });
});
