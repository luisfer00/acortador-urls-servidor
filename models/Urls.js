const { DataTypes } = require('sequelize')
const sequelize = require('../db.js')

module.exports = sequelize.define('Url', {
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  url: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
})
