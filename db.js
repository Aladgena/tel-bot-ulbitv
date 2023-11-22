require('dotenv').config()
const {Sequelize} = require('sequelize');

const db = process.env.DB
const user = process.env.USER
const pwd = process.env.PWD

module.exports = new Sequelize(
  db,
  user,
  pwd,
  {
    host: 'cornelius.db.elephantsql.com',
    port: '5432',
    dialect: 'postgres'
  }
)
