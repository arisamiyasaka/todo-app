import React from 'react'
import store from '../store'
import { currentAction } from '../actions'

export default ({type, children}) => (
  <button onClick={() => store.dispatch(currentAction(type))}>{children}</button>
)
