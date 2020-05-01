import { combineReducers } from 'redux'
import inputs from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  inputs,
  visibilityFilter
})