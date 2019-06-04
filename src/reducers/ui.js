const ui = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_PROJECT':
      return {
        ...state,
        activeProject: action.id
      }
    default:
      return state
  }
}

export default ui
