const { authController } = require('../controllers/auth')
const { addUserValidation } = require('../validator/user')

module.exports = function (app, router) {
  router.post('/register', addUserValidation, authController.register)

  app.use('/api', router)
}
