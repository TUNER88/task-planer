const ui = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_TASK_COMPLETION':
      const id = action.id
      return {
        ...state,
        [id]: {
          ...state[id],
          completed: !state[id].completed
        }
      }
    default:
      return state
  }
}

export default ui
