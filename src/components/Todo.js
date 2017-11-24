import React from 'react'

export default ({ attr: { id, completed, description }, $parent }) => {
  return (
    <li
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
      onClick={() => $parent(id)}
    >
      {description}
    </li>
  )
}
