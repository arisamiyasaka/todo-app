import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

/* Logging middleware */
import addLoggingToDispatch from 'redux-logger'

/* thunk middleware */
import thunk from 'redux-thunk'

let middlewares = [thunk]

let composedMiddlewares
if (process.env.NODE_ENV === 'development') {
  middlewares.push(addLoggingToDispatch)
  composedMiddlewares = composeWithDevTools(applyMiddleware(...middlewares))
} else {
  composedMiddlewares = applyMiddleware(...middlewares)
}

/* Init Store */
let store = createStore(rootReducer, composedMiddlewares)

export default store

/*
 * Work: actions/index.js 内の Action creator を書き換えて、
 * Promise をサポートするmiddlewareを取り除いて下さい。
*/
