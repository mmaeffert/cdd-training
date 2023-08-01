// backend/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db', 'user', 'pw', {
  dialect: 'mysql', // or 'mysql' or 'postgres', depending on your database
  host: 'localhost',
  port: 3306
});

module.exports = sequelize;
