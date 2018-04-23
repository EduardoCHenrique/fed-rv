import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import Hotels from './reducers/Hotels'
import Filters from './reducers/Filters'

export default createStore(
  combineReducers(
    {
      hotels: Hotels,
      filters: Filters
    }
  ),
  applyMiddleware(
    thunkMiddleware
  )
)
