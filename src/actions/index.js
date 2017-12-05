import TYPE from './_actionTypes'

/* Actions
****************/

/* Thunk Action */
export const addTodoAction = description => dispatch => setTimeout(() => {
  dispatch({ type: TYPE.ADD_TODO, payload: { description } })
}, 1000)

/* Thunk Action */
export const toggleTodoAction = id => dispatch => setTimeout(() => {
  dispatch({ type: TYPE.TOGGLE_TODO, payload: { id } })
}, 500)
