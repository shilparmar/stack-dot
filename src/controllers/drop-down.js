const { db } = require('../models')
const { institute_type: instituteTypeModel, institute_sector: instituteSectorModel, class_type: classModel, subject: subjectModel } = db

// Drop Down for type institute type selection
const instituteTypeSelection = async (req, res) => {
  try {
    const result = await instituteTypeModel.findAll({
      where: { is_deleted: false, enable: true },
      order: [['id', 'ASC']]
    })

    if (!result.length) {
      return res.status(202).json({ status: true, statusCode: 202, message: 'Not exist', data: result })
    }

    return res
      .status(200)
      .json({ status: true, statusCode: 200, message: 'Institute Type list', data: result })
  } catch (error) {
    return res.status(422).json({ status: false, statusCode: 422, message: 'Error! message not found.', data: null })
  }
}

// Drop Down for type institute sector selection
const instituteSectorSelection = async (req, res) => {
  try {
    const result = await instituteSectorModel.findAll({
      where: { is_deleted: false, enable: true, institute_type_id: req.params.id },
      order: [['id', 'ASC']]
    })

    if (!result.length) {
      return res.status(202).json({ status: true, statusCode: 202, message: 'Not exist', data: result })
    }

    return res
      .status(200)
      .json({ status: true, statusCode: 200, message: 'Institute Sector list', data: result })
  } catch (error) {
    return res.status(422).json({ status: false, statusCode: 422, message: 'Error! message not found.', data: null })
  }
}

// Drop Down for class
const classSelection = async (req, res) => {
  try {
    const result = await classModel.findAll({
      where: { is_deleted: false, enable: true, institute_type_id: req.params.institute_type_id, institute_sector_id: req.params.institute_sector_id },
      order: [['id', 'ASC']]
    })

    if (!result.length) {
      return res.status(202).json({ status: true, statusCode: 202, message: 'Not exist', data: result })
    }

    return res
      .status(200)
      .json({ status: true, statusCode: 200, message: 'Class list', data: result })
  } catch (error) {
    return res.status(422).json({ status: false, statusCode: 422, message: 'Error! message not found.', data: null })
  }
}

// Drop Down for subject selection
const subjectSelection = async (req, res) => {
  try {
    const result = await subjectModel.findAll({
      where: { enable: true, class_id: req.params.class_id },
      order: [['id', 'ASC']]
    })

    if (!result.length) {
      return res.status(202).json({ status: true, statusCode: 202, message: 'Not exist', data: result })
    }

    return res
      .status(200)
      .json({ status: true, statusCode: 200, message: 'Subject list', data: result })
  } catch (error) {
    return res.status(422).json({ status: false, statusCode: 422, message: 'Error! message not found.', data: null })
  }
}

module.exports.dropDownController = {
  instituteTypeSelection,
  instituteSectorSelection,
  classSelection,
  subjectSelection
}
