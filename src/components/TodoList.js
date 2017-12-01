import React from 'react'
import Todo from './Todo'
import store from '../store'

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
      }).
        map((attr) => (
          <Todo
            key={attr.id}
            attr={attr} />
        ))}
    </ul>
  )
}
