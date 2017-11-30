import { createStore } from 'redux'
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

const wrapDispatchWithMiddlewares = (store, middlewares) => {
  middlewares.slice().reverse().forEach(middleware =>
    store.dispatch = middleware(store)(store.dispatch)
  )
}

const middlewares = [addPromiseSupportToDispatch, addLoggingToDispatch]

/* Init Store */
let store = createStore(rootReducer)

/* Wrap Dispatch(Similler Apply middlewares) */
wrapDispatchWithMiddlewares(store, middlewares)

export default store
