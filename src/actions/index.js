import React from 'react'
import TYPE from './_actionTypes'

/* Actions */
export const addTodoAction = description => ({ type: TYPE.ADD_TODO, payload: { description } })
export const toggleTodoAction = id => ({ type: TYPE.TOGGLE_TODO, payload: { id } })
