const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onCreateTravel = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  // console.log(data)
  api.createTravel(data)
    .then(ui.createTravelSuccess)
    .catch(ui.createTravelFailure)
}

const onTravelIndex = function (event) {
  event.preventDefault()
  api.travelIndex()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

module.exports = {
  onCreateTravel,
  onTravelIndex
}
