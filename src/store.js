import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

/* Logging middleware */
const addLoggingToDispatch = (store) => (rawDispatch) => {
  // New dispatch function
  return (action) => {
    console.group(action.type)
    console.log('%c prev state', 'color: gray', store.getState())
    console.log('%c action', 'color: blue', action)
    const returnValue = rawDispatch(action)
    console.log('%c next state', 'color: green', store.getState())
    console.groupEnd(action.type)
    return returnValue
  }
}

/* recognizing Promise object middleware */
const addPromiseSupportToDispatch = (store) => (rawDispatch) => (action) => {
  if (typeof action.then === 'function') {
    return action.then(rawDispatch)
  } else {
    return rawDispatch(action)
  }
}

const middlewares = [addPromiseSupportToDispatch, addLoggingToDispatch]

/* Init Store */
let store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
