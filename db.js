const { Sequelize } = require('sequelize')

const { DB_USER, DB_PASSWD, DB_NAME, DB_HOST } = process.env

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWD,
  database: DB_NAME,
})

module.exports = sequelize
