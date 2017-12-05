import React from 'react'

export default ({ attr: { id, completed, description }, onClick}) => (
  <li
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
    onClick={onClick}
  >
    {description}
  </li>
)
