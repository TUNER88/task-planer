export const addProject = data => ({
  type: 'ADD_PROJECT',
  data
})

export const addTask = data => ({
  type: 'ADD_TASK',
  data
})

export const setTaskFilter = search => ({
  type: 'SET_TASK_FILTER',
  search
})

export const setTaskSortOption = option => ({
  type: 'SET_TASK_SORT_OPTION',
  option
})

export const selectProject = id => ({
  type: 'SELECT_PROJECT',
  id
})

export const toggleTaskCompletion = id => ({
  type: 'TOGGLE_TASK_COMPLETION',
  id
})

export const toggleNewTaskForm = () => ({
  type: 'TOGGLE_NEW_TASK_FORM'
})
