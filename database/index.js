const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'maikeru',
    password: 'SDCpostgres',
    database: 'item_summary',
  },
});

knex.schema.createTable('items', (table) => {
  table.increments();
  table.string('name');
  table.string('description', 500);
  table.string('fabric');
  table.string('care');
  table.string('features');
  table.string('colors');
  table.string('price');
})
  .then(res => console.log(res))
  .catch(err => console.error(err));

// const getAllItems = () => Items.findAll();

// const getItemById = id => Items.findOne({ where: { id } })
//   .then(item => item)
//   .catch(err => console.error(err));
// // SELECT * FROM items WHERE Id = 2

// const getItemByName = name => Items.findOne({ where: { name } })
//   .then(item => item)
//   .catch(err => console.error(err));
// // SELECT * FROM items WHERE name = name

// const createItem = (item) => {
//   const {
//     name, description, fabric, care, features,
//     colors, price,
//   } = item;
//   Items.findOrCreate({ where: { name } }, {
//     defaults: {
//       name,
//       description,
//       fabric,
//       care,
//       features,
//       colors,
//       price,
//     },
//   })
//     .spread((newItem, created) => newItem)
//     .catch(err => console.error(err));
// };
/*
INSERT INTO items (name, description, fabric, care, features, colors, price,)
VALUES
   (
      name,
      description,
      fabric,
      care,
      features,
      colors,
      price,
   )
ON CONFLICT ON CONSTRAINT name
DO NOTHING; */

// const updateItem = (id, params) => Item.Update({ params }, { where: { id } })
//   .then(updated => updated)
//   .catch(err => console.error(err));
/* UPDATE items SET name = params.name description = params.description
care = params.care fabric = params.fabric features = params.features
colors = params.colors price = params.price WHERE id = id; */

// const deleteItem = id => Items.destroy({ where: id })
//   .then(destroyed => destroyed)
//   .catch(err => console.error(err));
// DELETE FROM items WHERE id = id

// module.exports = {
//   getAllItems,
//   getItemById,
//   getItemByName,
//   createItem,
//   updateItem,
//   deleteItem,
// };

// const mysql = require('mysql');
// const Promise = require('bluebird');
// const mysqlConfig = require('./config.js');

// const connection = mysql.createConnection(mysqlConfig);

// const getAllItems = () => {
//   const q = 'SELECT * FROM items';
//   return new Promise((resolve, reject) => {
//     connection.query(q, (err, results) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// };

// const getSingleItem = (id) => {
//   const q = 'SELECT * FROM items WHERE id=?';
//   const product_id = id;
//   return new Promise((resolve, reject) => {
//     connection.query(q, product_id, (err, results) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// };

// const clearTable = () => {
//   const q = 'TRUNCATE TABLE items';
//   return new Promise((resolve, reject) => {
//     connection.query(q, (err, results) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// };
