import React from 'react'
import store from '../store'
import { toggleTodoAction } from '../actions'

const asyncProc = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(id)
    }, 500)
  })
}

export default ({ attr: { id, completed, description }, $parent }) => (
  <li
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
    onClick={() => {
        asyncProc(id)
          .then((asyncId) => {
            store.dispatch(toggleTodoAction(asyncId))
          })
      }
    }
  >
    {description}
  </li>
)
