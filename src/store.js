import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

/* Logging middleware */
import addLoggingToDispatch from 'redux-logger'

/* thunk middleware */
import thunk from 'redux-thunk'

const middlewares = [thunk, addLoggingToDispatch]

/* Init Store */
let store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store

/*
 * Work: actions/index.js 内の Action creator を書き換えて、
 * Promise をサポートするmiddlewareを取り除いて下さい。
*/
