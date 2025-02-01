// check validation
const checkValidation = errors => {
  const error = errors.errors
  const errArr = []
  for (let i = 0; i < error.length; i++) {
    if (errArr.length) {
      let isRequire = false
      for (let j = 0; j < errArr.length; j++) {
        if (errArr[j].param === error[i].param) {
          isRequire = true
        }
      }
      if (!isRequire) {
        errArr.push(error[i])
      }
    } else {
      errArr.push(error[i])
    }
  }

  return errArr
}

module.exports = {
  checkValidation
}
