const mysql = require('mysql');
const Promise = require('bluebird');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllItems = () => {
  const q = 'SELECT * FROM items';
  return new Promise ((resolve, reject) => {
    connection.query(q, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const getSingleItem = (id) => {
  const q = 'SELECT * FROM items WHERE id=?';
  const product_id = id;
  return new Promise((resolve, reject) => {
    connection.query(q, product_id, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const clearTable = () => {
  const q = 'TRUNCATE TABLE items';
  return new Promise((resolve, reject) => {
    connection.query(q, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  connection,
  getAllItems,
  getSingleItem,
  clearTable,
};
