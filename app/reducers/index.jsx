import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  secret: require('./secret').default,
})

export default rootReducer
