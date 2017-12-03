import React from 'react'
import {Link} from 'react-router-dom'

const ToggleButton = ({type, children}) => (
  <Link to={type === 'all' ? '' : type}>{children}</Link>
)

export default ToggleButton
