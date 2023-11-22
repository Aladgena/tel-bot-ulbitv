require('dotenv').config()
const {Sequelize} = require('sequelize');

const db = process.env.DB
const user = process.env.USER
const pwd = process.env.PWD

module.exports = new Sequelize(
  'zzuhagrq',
  'zzuhagrq',
  '941wvHa8qOssMkEzt--ODNSpsUyznb4w',
  {
    host: 'cornelius.db.elephantsql.com',
    port: '5432',
    dialect: 'postgres'
  }
)
