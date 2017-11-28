import { createStore } from 'redux'
import rootReducer from './reducers'

/* Init Store */
const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch

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

let store = createStore(rootReducer)
store.dispatch = addLoggingToDispatch(store)

export default store

