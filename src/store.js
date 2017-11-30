import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

/* Logging middleware */
import addLoggingToDispatch from 'redux-logger'

/* recognizing Promise object middleware */
import addPromiseSupportToDispatch from 'redux-promise'

/* thunk middleware */
import thunk from 'redux-thunk'

const middlewares = [thunk, addPromiseSupportToDispatch, addLoggingToDispatch]

/* Init Store */
let store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
