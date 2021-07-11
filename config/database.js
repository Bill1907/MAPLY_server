const dotenv = require('dotenv');
dotenv.config();

const config = {
    development: {
      host: 'localhost',
      user: 'root',
      password: process.env.DATABASE_PASSWORD,
      database: 'MAPLY'
    },
    test: {
      host: 'localhost',
      user: 'root',
      password: process.env.DATABASE_PASSWORD,
      database: 'MAPLY_test'
    }
  };
  
  module.exports = config;