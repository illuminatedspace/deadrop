import axios from 'axios'

//REDUCER
const reducer = (state = null, action) => {
  switch(action.type) {
    case submitSecret:
      return state

    default:
      return state
  }
}

//SYNC ACTION CREATORS
const SUBMIT_SECRET = 'SUBMIT_SECRET'
export const submitSecret = secret => ({
  type: SUBMIT_SECRET
})

//ASYNC ACTION CREATORS
//will need to add a user to this when users are implemented
export const storeSecret = (secret, longitude, latitude) =>
  dispatch => {
    axios.post('/api/secrets/drop', {
      secret: secret,
      longitude: longitude,
      latitude: latitude,
      })
    .then((secret) => {
      dispatch(submitSecret())
    })
    .catch(console.error)
  }

export default reducer
