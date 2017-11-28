import TYPE from './_actionTypes'

/* Actions */
export const addTodoAction = description => ({ type: TYPE.ADD_TODO, payload: { description } })
export const toggleTodoAction = id => new Promise((resolve) => {
  setTimeout(() => {
    resolve({ type: TYPE.TOGGLE_TODO, payload: { id } })
  }, 500)
})
export const currentAction = mode => ({ type: TYPE.CURRENT_TODO, payload: { mode } })
