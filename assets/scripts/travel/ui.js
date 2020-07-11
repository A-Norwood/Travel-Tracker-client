const store = require('./../store')
const showTravel = require('./../templates/travel.handlebars')

const createTravelSuccess = function (response) {
  $('form').trigger('reset')
  $('#create-message').text('Travel entry submitted!')
  store.travel = response.travel
}

const createTravelFailure = function (data) {
  $('#create-message').text('Failiure creating travel! Try Again')
}

const indexSuccess = (data) => {
  const showTravelHtml = showTravel({travel: data.travel})
  $('.content').html(showTravelHtml)
  $('#view-travels-message').text('Here are your travels! (If none shown, get started by filling out Create Travel form)')
  $('#update-message').empty()
  $('#create-message').empty()
}

const deleteSuccess = (travelId) => {
  $(`[data-id='${travelId}']`).remove()
  $('#delete-message').text('Travel has been deleted')
}

const deleteFailure = (error) => {
  console.error(error)
  $('#delete-message').text('Travel delete action failed')
}

const updateSuccess = (travelId) => {
  $('form').trigger('reset')
  $('#update-message').text('Updated travel successfully. Click "View Your Travels" to view updated submission')
  $('#update-travel').hide()
}

const updateFailure = () => {
  $('form').trigger('reset')
  $('#update-message').text('Updated travel failed')
}

module.exports = {
  createTravelSuccess,
  createTravelFailure,
  indexSuccess,
  deleteSuccess,
  deleteFailure,
  updateSuccess,
  updateFailure
}
