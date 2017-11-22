import React from 'react'

export default ({ children, onClick }) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}
