import axios from 'axios'

//REDUCER
const reducer = (state = null, action) => {
  switch(action.type) {
    case submitSecret:
      return action.secret

    default:
      return state
  }
}

//SYNC ACTION CREATORS
const SUBMIT_SECRET = 'SUBMIT_SECRET'
export const submitSecret = secret => ({
  type: SUBMIT_SECRET, secret
})

//ASYNC ACTION CREATORS
//will need to add a user to this when users are implemented
export const storeSecret = (secret) =>
  dispatch =>
    axios.post('/api/secrets/drop',
      {secret})
    .then((secret) => dispatch(submitSecret(secret)))
    .catch(console.error)

export default reducer
