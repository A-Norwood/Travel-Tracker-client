const config = require('./../config.js')
const store = require('./../store.js')

const createTravel = function (data) {
  return $.ajax({
    url: config.apiUrl + '/travel',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      travel: {
        date: data.travel.date,
        location: data.travel.location
      }
    }
  })
}

const travelIndex = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/travel',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      travel: {
        owner: store.user._id
      }
    }
  })
}

const deleteTravel = (travelId) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/travel/' + travelId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateTravel = (data) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/travel/' + store.travelId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

module.exports = {
  travelIndex,
  createTravel,
  deleteTravel,
  updateTravel
}
