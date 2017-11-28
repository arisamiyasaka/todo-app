import { combineReducers } from 'redux'
import currentReducer from './currentReducer'
import { todoListReducer } from './todoListReducer'

export default combineReducers({ current: currentReducer, todoList: todoListReducer })
