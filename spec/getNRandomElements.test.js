const seed = require('../server/seed.js');

test('Returns an array of size n', (done) => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  expect(seed.getNRandomElements(arr, 3).length).toBe(3);
  done();
});
