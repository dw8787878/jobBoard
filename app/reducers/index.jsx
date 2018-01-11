import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  jobs: require('./jobs').default
})

export default rootReducer
