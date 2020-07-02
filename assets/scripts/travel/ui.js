const store = require('./../store')
const showTravel = require('./../templates/travel.handlebars')

const createTravelSuccess = function (response) {
  // console.log('success')
  $('form').trigger('reset')
  $('#create-message').text('Travel entry submitted!')
  store.travel = response.travel
}

const createTravelFailure = function (data) {
  // console.log('fail')
  $('#create-message').text('Failiure creating travel! Try Again')
}

const indexSuccess = (data) => {
  const showTravelHtml = showTravel({travel: data.travel})
  // const showId = showTravel({travel: data.travel._id})
  $('.content').html(showTravelHtml)
  $('#view-travels-message').text('Here are your travels!')
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
