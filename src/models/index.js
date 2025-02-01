const { dbConnection, Sequelize } = require('../db-connection')

const db = {}

db.Sequelize = Sequelize
db.sequelize = dbConnection

db.user = require('./user')(dbConnection, Sequelize)
db.institute_type = require('./institute_type')(dbConnection, Sequelize)
db.institute_sector = require('./institute_sector')(dbConnection, Sequelize)
db.class_type = require('./class_type')(dbConnection, Sequelize)
db.user_history = require('./user_history')(dbConnection, Sequelize)
db.user_subject = require('./user_subject')(dbConnection, Sequelize)
db.subject = require('./subject')(dbConnection, Sequelize)

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

module.exports = { db }
