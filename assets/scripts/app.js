'use strict'
const credsEvent = require('./auth/events.js')
// const createTravel = require('./auth/events.js')
//
$(() => {
  $('#sign-up').on('submit', credsEvent.onSignUp)
  $('#sign-in').on('submit', credsEvent.onSignIn)
  $('#change-pw').on('submit', credsEvent.onChangePw)
  $('#sign-out').on('submit', credsEvent.onSignOut)
  // $('#crete-travel-form').on('submit', createTravel.onCreateTravel)
})
