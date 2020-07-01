const store = require('./../store')

const createTravelSuccess = function (response) {
  store.travel = response.travel
  console.log('success')
  $('#message').text('Created your travel successfully!')
}

const createTravelFailure = function (data) {
  console.log('fail')
  $('#message').text('Failiure creating travel! Try Again')
}

module.exports = {
  createTravelSuccess,
  createTravelFailure
}
