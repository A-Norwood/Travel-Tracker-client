const store = require('./../store')
const showTravel = require('./../templates/travel.handlebars')

const createTravelSuccess = function (response) {
  store.travel = response.travel
  // console.log('success')
  $('form').trigger('reset')
  $('#message').text('Created your travel successfully!')
}

const createTravelFailure = function (data) {
  // console.log('fail')
  $('#message').text('Failiure creating travel! Try Again')
}

const indexSuccess = (data) => {
  const showTravelHtml = showTravel({travel: data.travel})
  $('.content').html(showTravelHtml)
}

module.exports = {
  createTravelSuccess,
  createTravelFailure,
  indexSuccess
}
