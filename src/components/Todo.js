import React from 'react'
import store from '../store'
import { toggleTodoAction } from '../actions'

export default ({ attr: { id, completed, description }, $parent }) => (
  <li
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
    onClick={() => {
      store.dispatch(toggleTodoAction(id))
    }}
  >
    {description}
  </li>
)
