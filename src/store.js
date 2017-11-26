import { createStore } from 'redux'
import v4 from 'uuid/v4'

const TYPE = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
}

const initialState = [
  {
    id: v4(),
    description: 'My todo 1',
    completed: false
  },
  {
    id: v4(),
    description: 'My todo 2',
    completed: false
  },
  {
    id: v4(),
    description: 'My todo 3',
    completed: false
  }
]

/* Actions */
export const addTodoAction = description => ({ type: TYPE.ADD_TODO, payload: { description } })
export const toggleTodoAction = id => ({ type: TYPE.TOGGLE_TODO, payload: { id } })

/* Reducers */
const todoListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE.ADD_TODO:
      return [...state, { id: v4(), description: payload.description, completed: false }]
    case TYPE.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== payload.id) return todo

        return {
          ...todo,
          completed: !todo.completed
        }
      })
    default:
      return state
  }
}

/* Init Store */
export default createStore(todoListReducer)

/* TODO: todoListReducerの中に入っている、個別のTodoに対する処理を
   todoReducerに移譲する
const todoReducer = (state, action) => {
}
*/

/* TODO:
  * Reducerを1ファイル1Reducerの単位で reducers/ 以下にファイルを分割する。ファイル名はReducerの変数名と同一にする。
  * ActionはReducerほど処理が複雑でないので、 actions/index.js にまとめて格納する。
*/
