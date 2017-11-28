export default (state, action) => {
  if (state.id !== action.payload.id) return state
  return {
    ...state,
    completed: !state.completed
  }
}
