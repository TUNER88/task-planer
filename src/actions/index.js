export const addProject = data => ({
  type: 'ADD_PROJECT',
  data
})

export const addTask = data => ({
  type: 'ADD_TASK',
  data
})

export const updateTask = data => ({
  type: 'UPDATE_TASK',
  data
})

export const removeTask = id => ({
  type: 'REMOVE_TASK',
  id
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
