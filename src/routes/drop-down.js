const { dropDownController: ddc } = require('../controllers/drop-down')

module.exports = function (app, router) {
  router.get('/institute-type', ddc.instituteTypeSelection)
  router.get('/institute-sector/:id', ddc.instituteSectorSelection)
  router.get('/class/:institute_type_id/:institute_sector_id', ddc.classSelection)
  router.get('/subject/:class_id', ddc.subjectSelection)

  app.use('/api', router)
}
