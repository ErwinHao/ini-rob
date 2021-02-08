const Sequelize = require('sequelize');

const sequelize = new Sequelize('test_db', 'erwin', 'Cremasion123', {
  dialect: 'postgres',
  host: 'localhost',
});

module.exports = sequelize;
