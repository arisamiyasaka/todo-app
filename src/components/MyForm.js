import React from 'react'
import { addTodoAction } from '../actions'
import {connect} from 'react-redux'

const MyForm = ({addTodo}) => {
  let input = ''
  return (
    <div>
      <input type="text" ref={node => input = node} />
      <button onClick={() => {
        addTodo(input.value)
        input.value = ''
      }
      }>Add</button>
    </div>
  )
}

const mapDispatchToProps = {
  addTodo: addTodoAction
}

/** MEMO: Stete を持たない場合は第一引数を undefined とする。 null は絶対に渡さない。 */
export default connect(undefined, mapDispatchToProps)(MyForm)
