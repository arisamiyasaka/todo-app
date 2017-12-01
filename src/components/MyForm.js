import React from 'react'
import store from '../store'
import { addTodoAction } from '../actions'

export default () => {
  let input = ''
  return (
    <div>
      <input type="text" ref={node => input = node} />
      <button onClick={() => {
        store.dispatch(addTodoAction(input.value))
        input.value = ''
      }
      }>Add</button>
    </div>
  )
}
