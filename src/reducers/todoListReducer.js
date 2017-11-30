import todoReducer from './todoReducer'
import TYPE from '../actions/_actionTypes'
import v4 from 'uuid/v4'


const initialState = [
  {
    id: v4(),
    description: 'My todo 1',
    completed: false
  },
  {
    id: v4(),
    description: 'My todo 2',
    completed: false
  },
  {
    id: v4(),
    description: 'My todo 3',
    completed: false
  }
]

/* Reducers */
export const todoListReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case TYPE.ADD_TODO:
      return [...state, { id: v4(), description: payload.description, completed: false }]
    case TYPE.TOGGLE_TODO:
      return state.map(todo => {
        return todoReducer(todo, action)
      })
    default:
      return state
  }
}
