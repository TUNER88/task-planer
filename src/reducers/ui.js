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
    case 'TOGGLE_NEW_TASK_FORM':
      return {
        ...state,
        showNewTaskForm: !state.showNewTaskForm,
        showTaskList: !state.showTaskList
      }
    default:
      return state
  }
}

export default ui
