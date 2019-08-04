const ui = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_PROJECT':
      return {
        ...state,
        activeProject: action.id
      }
    case 'SET_TASK_SORT_OPTION':
      return {
        ...state,
        taskSortOption: action.option
      }
    case 'SET_TASK_FILTER':
      return {
        ...state,
        taskFilter: action.search
      }
    default:
      return state
  }
}

export default ui
