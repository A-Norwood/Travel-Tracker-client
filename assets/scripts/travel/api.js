const config = require('./../config.js')
const store = require('./../store.js')

// const travelIndex = () => {
//   return $.ajax({
//     url: config.apiUrl + '/travel',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const getTravel = (id) => {
//   return $.ajax({
//     url: config.apiUrl + '/travel/' + id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const createTravel = function (data) {
  // console.log(store.user._id)
  // console.log(store.user.token)
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

//
// const editTravel = (data, id) => {
//   const travel = data.travel
//   console.log(travel)
//
//   return $.ajax({
//     url: config.apiUrl + '/travel/' + id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {
//       travel
//     }
//   })
// }
//
// const deleteTravel = (travelId) => {
//   return $.ajax({
//     url: config.apiUrl + '/travel/' + travelId,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  // travelIndex,
  createTravel
  // getTravel,
  // editTravel,
  // deleteTravel
}
