import React from 'react'
import { currentAction } from '../actions'
import {connect} from 'react-redux'

const ToggleButton = ({type, children, current}) => (
  <button onClick={() => current(type)}>{children}</button>
)

const mapDispatchToProps = {
  current: currentAction
}

export default connect(undefined, mapDispatchToProps)(ToggleButton)
