import axios from 'axios'

const initialState = {
  currentSecret: 0,
}

//REDUCER
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case submitSecret:
      return state

    case setSecret:
      return Object.assign(
        {},
        state,
        action.currentSecret
      )

    default:
      return state
  }
}

//SYNC ACTION CREATORS
const SUBMIT_SECRET = 'SUBMIT_SECRET'
export const submitSecret = secret => ({
  type: SUBMIT_SECRET
})

const SET_SECRET = 'SET_SECRET'
export const setSecret = secret => ({
  type: SET_SECRET,
  currentSecret: secret,
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
