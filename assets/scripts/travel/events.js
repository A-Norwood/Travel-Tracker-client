const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('./../store')

const onCreateTravel = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
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

const onDeleteTravel = function (event) {
  event.preventDefault()
  const travelId = $(event.target).data('id')
  api.deleteTravel(travelId)
    .then(() => ui.deleteSuccess(travelId))
    .catch(ui.deleteFailure)
}

const onUpdateTravel = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateTravel(data)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

const onTravelClick = function (event) {
  event.preventDefault()
  store.travelId = event.target.dataset.id
  $('#update-travel').show()
}

module.exports = {
  onCreateTravel,
  onTravelIndex,
  onDeleteTravel,
  onUpdateTravel,
  onTravelClick
}
