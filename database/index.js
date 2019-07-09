const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const Promise = require('bluebird');

const connection = mysql.createConnection(mysqlConfig);

const getAllItems = () => {
  const q = `SELECT * FROM items`;
  return new Promise ((resolve, reject) => {
    connection.query(q, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    })
  })
}

module.exports = { connection, getAllItems };