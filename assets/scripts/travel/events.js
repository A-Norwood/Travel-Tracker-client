const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../lib/get-form-fields.js')

const onCreateTravel = function (form) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.createTravel(data)
    .then(ui.createTravelSuccess)
    .catch(ui.createTravelFailure)
}

module.exports = {
  onCreateTravel
}
