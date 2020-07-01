const store = require('./../store')

const signUpSuccess = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#sign-up-content').text('Sign up complete ' + response.user.email)
  $('#sign-up-content').show()
  $('#signout-message').text('Signed out successfully. Please sign in again.').hide()
}

const signUpFailure = function () {
  $('form').trigger('reset')
  $('#sign-up-content').text('Sign up failed')
  $('#sign-up-content').show()
}

const signInSuccess = function (response) {
  $('form').trigger('reset')
  $('#sign-up-content').text('Signed in ' + response.user.email)
  $('#sign-up-content').show()
  $('.hidden').removeClass()
  $('.show').hide()
  $('#sign-out-stuff').show()
  $('#sign-out').show()
  $('#change-pw').show()
  $('#signout-message').text('Signed out successfully. Please sign in again.').hide()
  $('#create-travel-form').show()
  $('#view-travels-btn').show()
  store.user = response.user
}

const signInFailure = function (response) {
  $('form').trigger('reset')
  $('#sign-up-content').text('Signed in failed')
  $('#sign-up-content').show()
}

const changePwSuccess = function () {
  $('form').trigger('reset')
  $('.change-pw-message').text('Password changed successfully')
}

const changePwFailure = function () {
  $('form').trigger('reset')
  $('.change-pw-message').text('Password change failed')
}

const signOutSuccess = function () {
  $('#signout-message').text('Signed out successfully. Please sign in again.').show()
  $('#change-pw').hide()
  $('.show').show()
  $('#sign-up-content').hide()
  $('.message').hide()
  $('#sign-out').hide()
  $('.change-pw-message').hide()
  $('#create-travel-form').hide()
  $('#view-travels-btn').hide()
  console.log(store)
}

const signOutFailure = function () {
  $('#sign-out').text('Signed Out Failed')
  $('#sign-out').removeClass()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePwSuccess,
  changePwFailure,
  signOutSuccess,
  signOutFailure
}
