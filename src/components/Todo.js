import React from 'react'
import store from '../store'
import { toggleTodoAction } from '../actions'

const asyncProc = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(toggleTodoAction(id))
    }, 500)
  })
}

export default ({ attr: { id, completed, description }, $parent }) => (
  <li
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
    onClick={() => {
      store.dispatch(asyncProc(id))
    }}
  >
    {description}
  </li>
)
