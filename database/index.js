const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://localhost:5432/wawa_melon');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const { Model } = Sequelize;

class Item extends Model {}
Item.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: Sequelize.STRING,
  fabric: Sequelize.STRING,
  care: Sequelize.STRING,
  features: Sequelize.STRING,
  colors: Sequelize.STRING,
  prize: Sequelize.STRING,
},
// options
{
  sequelize,
  modelName: 'item',
});

const getAllItems = () => Item.findAll();

const getItemById = id => Item.findOne({ where: { id } })
  .then(item => item)
  .catch(err => console.log(err));

const getItemByName = name => Item.findOne({ where: { name } })
  .then(item => item)
  .catch(err => console.log(err));

const createItem = item => Item.findOrCreate({ where: { name: item.name } })
  .spread((newItem, created) => newItem)
  .catch(err => console.log(err));

const updateItem = (id, params) => Item.Update({ params }, { where: { id } })
  .then(updated => updated)
  .catch(err => console.log(err));

const deleteItem = id => Item.destroy({ where: id })
  .then(destroyed => destroyed)
  .catch(err => console.log(err));

module.exports = {
  getAllItems,
  getItemById,
  getItemByName,
  createItem,
  updateItem,
  deleteItem,
};

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
