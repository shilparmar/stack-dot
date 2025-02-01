const { dbConnection } = require('./index')
const { db } = require('../models')

// check database connected successfully or not.
dbConnection.authenticate().then(() => {
  console.log('db connected successfully')
})

// sync database tables
db.sequelize.sync({ force: false, alter: true })
