'use strict'
const credsEvent = require('./auth/events.js')
const travelEvents = require('./travel/events.js')
//
$(() => {
  $('#sign-up').on('submit', credsEvent.onSignUp)
  $('#sign-in').on('submit', credsEvent.onSignIn)
  $('#change-pw').on('submit', credsEvent.onChangePw)
  $('#sign-out').on('submit', credsEvent.onSignOut)
  $('#create-travel-form').on('submit', travelEvents.onCreateTravel)
  $('#view-travels-btn').on('click', travelEvents.onTravelIndex)
  $('.content').on('click', '.delete-travel', travelEvents.onDeleteTravel)
})
