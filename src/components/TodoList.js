import React from 'react'
import Todo from './Todo'
import store from '../store'
import { toggleTodoAction } from '../actions'

export default () => {
  const {current, todoList} = store.getState()
  return (
    <ul>
      {todoList.filter(({ completed }) => {
        switch (current) {
          case 'done':
            return completed
          case 'not yet':
            return !completed
          default:
            return true
        }
      }).map((attr) => (
        <Todo
          onClick={() => store.dispatch(toggleTodoAction(attr.id))}
          key={attr.id}
          attr={attr} />
      ))}
    </ul>
  )
}
