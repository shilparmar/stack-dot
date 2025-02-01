const { body } = require('express-validator')

// * add validation
exports.addUserValidation = [
  body('first_name')
    .exists()
    .withMessage('first_name field is missing')
    .notEmpty()
    .withMessage('first_name is empty')
    .isLength({ max: 30 })
    .withMessage('first_name allowed upto 30 characters only'),
  body('last_name')
    .exists()
    .withMessage('first_name field is missing')
    .notEmpty()
    .withMessage('first_name is empty')
    .isLength({ max: 30 })
    .withMessage('first_name allowed upto 30 characters only'),
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email address')
    .exists()
    .withMessage('email field is missing')
    .notEmpty()
    .withMessage('email is empty')
    .isLength({ max: 60 })
    .withMessage('email allowed upto 50 characters only')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    .withMessage('email not valid'),
  body('phone')
    .notEmpty()
    .withMessage('Phone is empty')
    .isLength({ max: 10, min: 10 })
    .withMessage('Phone number mast be 10 digits'),
  body('medium')
    .exists()
    .withMessage('medium field is missing')
    .notEmpty()
    .withMessage('medium is empty')
]
