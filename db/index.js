const mysql = require('mysql');
const dotenv = require('dotenv');
const dbconfig = require('../config/database');
dotenv.config();

const con = mysql.createConnection(
  dbconfig[process.env.NODE_ENV || 'development']
);

con.connect((err) => {
  if (err) throw err;
});

module.exports = con;