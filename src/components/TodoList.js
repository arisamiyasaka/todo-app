import React from 'react'
import Todo from './Todo'
import { toggleTodoAction } from '../actions'
import {connect} from 'react-redux'

const TodoList = ({filter, todoList, toggleTodo}) => {
  return (
    <ul>
      {todoList.filter(({ completed }) => {
        switch (filter) {
          case 'done':
            return completed
          case 'not yet':
            return !completed
          default:
            return true
        }
      }).map((attr) => (
        <Todo
          onClick={() => toggleTodo(attr.id)}
          key={attr.id}
          attr={attr} />
      ))}
    </ul>
  )
}

const mapStateToProps = ({current, todoList}, ownProps) => {
  const {filter} = ownProps
  return {
    todoList: todoList,
    filter: filter,
  }
}

const mapDispatchToProps = {
  toggleTodo: toggleTodoAction
}

/** MEMO:
 * connect()は一つ目の関数に store.getstate() を渡し、
 * 二つ目の関数にstore.dispatch()を渡します。
 * そしてその返り値をコンポーネントの Props に挿入します。
 */
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
