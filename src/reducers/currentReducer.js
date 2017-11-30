import TYPE from '../actions/_actionTypes'

export default (state = 'all', action) => {
  switch (action.type) {
    case TYPE.CURRENT_TODO:
      return action.payload.mode
    default:
      return state
  }
}
