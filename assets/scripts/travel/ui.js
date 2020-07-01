const store = require('./../store')
const showTravel = require('./../templates/travel.handlebars')

const createTravelSuccess = function (response) {
  store.travel = response.travel
  // console.log('success')
  $('form').trigger('reset')
  $('#create-message').text('Travel entry submitted!')
}

const createTravelFailure = function (data) {
  // console.log('fail')
  $('#create-message').text('Failiure creating travel! Try Again')
}

const indexSuccess = (data) => {
  const showTravelHtml = showTravel({travel: data.travel})
  $('.content').html(showTravelHtml)
  $('#view-travels-message').text('Here are your travels!')
  $('#view-travels-btn').show()
}

const deleteSuccess = (travelId) => {
  $(`[data-container-id='${travelId}']`).remove()
}

const deleteFailure = (error) => {
  console.error(error)
}

module.exports = {
  createTravelSuccess,
  createTravelFailure,
  indexSuccess,
  deleteSuccess,
  deleteFailure
}
