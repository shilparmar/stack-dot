const { validationResult } = require('express-validator')

const { db } = require('../models')
const { user: userModel, user_history: userHistoryModel } = db.models

// Register user
const register = async (req, res) => {
  const t = await db.sequelize.transaction()
  try {
    const validation = await checkValidation(req, res)
    if (validation) return validation
    req.body.email = req.body.email.toLowerCase()

    // check email
    if (req.body.email) {
      const checkEmail = await userModel.findOne({ where: { email: req.body.email }, transaction: t }, { raw: true })
      if (checkEmail) {
        await t.rollback()

        return res.status(406).json({ status: false, statusCode: 406, message: 'Email already exist.', data: null })
      }
    }
    // add user
    const addUserObj = {
      first_name: req.body.first_name,
      middle_name: req.body?.middle_name || null,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone
    }
    const addUser = await userModel.create(addUserObj, { transaction: t })
    if (!addUser) {
      await t.rollback()

      return res.status(422).json({ status: false, statusCode: 422, message: 'User not registered.', data: null })
    }

    // add user history
    const addHistoryObj = {
      user_id: addUser.id,
      medium: req.body.medium,
      education_board: req.body.education_board,
      class_id: req.body.class_id,
      institute_type_id: req.body.institute_type_id,
      institute_sector_id: req.body.institute_sector_id
    }
    const addUserHistory = await userHistoryModel.create(addHistoryObj, { transaction: t })
    if (!addUserHistory) {
      await t.rollback()

      return res.status(422).json({ status: false, statusCode: 422, message: 'User not registered.', data: null })
    }

    await t.commit()

    return res
      .status(201)
      .json({ status: true, statusCode: 201, message: 'user registered successfully.', data: addUser })
  } catch (error) {
    await t.rollback()

    return res.status(422).json({ status: false, statusCode: 422, message: 'Error! User not registered.', data: null })
  }
}

// Check validation
const checkValidation = (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(406).json({ status: false, statusCode: 406, message: errors.errors[0].msg, data: null })
  }
}

module.exports.authController = {
  register
}
