import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import Hotels from './reducers/Hotels'

export default createStore(
  combineReducers(
    {
      hotels: Hotels
    }
  ),
  applyMiddleware(
    thunkMiddleware
  )
)
