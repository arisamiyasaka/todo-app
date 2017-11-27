import { createStore } from 'redux'
import { todoListReducer } from './reducers/todoListReducer'

/* Init Store */
export default createStore(todoListReducer)

