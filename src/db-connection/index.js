require('dotenv').config()
const Sequelize = require('sequelize')

const proConfig = {
  use_env_variable: process.env.PG_DB_URI,
  dialect: 'postgres',
  dialectOptions:
    process.env.NODE_ENV === 'production'
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        }
      : {},
  logging: false
}

const dbConnection = new Sequelize(process.env.PG_DB_URI, proConfig)

module.exports = {
  Sequelize,
  dbConnection
}
