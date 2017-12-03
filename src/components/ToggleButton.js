import React from 'react'
import { currentAction } from '../actions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const ToggleButton = ({type, children, current}) => (
  <Link to={type === 'all' ? '' : type}>{children}</Link>
)

const mapDispatchToProps = {
  current: currentAction
}

export default connect(undefined, mapDispatchToProps)(ToggleButton)
