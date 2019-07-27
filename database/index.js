const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'maikeru',
    password: 'SDCpostgres',
    database: 'item_summary',
  },
});

knex.schema.hasTable('items').then((exists) => {
  if (!exists) {
    knex.schema.createTable('items', (table) => {
      table.increments();
      table.string('name');
      table.string('description', 500);
      table.json('fabric');
      table.specificType('care', 'text ARRAY');
      table.json('features');
      table.json('colors');
      table.string('price');
    });
  }
}).catch(err => console.error(err));

const getItemById = id => knex.select().table('items').where({ id });
// SELECT * FROM items WHERE Id = Id

const getItemByName = name => knex.select().table('items').where({ name });
// SELECT * FROM items WHERE name = name

const createItem = newItem => knex('items').insert(newItem);
// INSERT INTO items (name, description, fabric, care, features, colors, price,)
// VALUES( name, description, fabric, care, features,colors,price)

const updateItem = (id, revision) => knex('items').where({ id }).update(revision);
/* UPDATE items SET name = params.name description = params.description
care = params.care fabric = params.fabric features = params.features
colors = params.colors price = params.price WHERE id = id; */

const deleteItem = id => knex('items').where({ id }).del();
// DELETE FROM items WHERE id = id


module.exports = {
  readId: getItemById,
  readName: getItemByName,
  create: createItem,
  update: updateItem,
  delete: deleteItem,
};
