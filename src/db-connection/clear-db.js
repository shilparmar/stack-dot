const { db } = require('../models')

// sync database tables
db.sequelize.drop({ drop: true })
