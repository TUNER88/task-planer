export const addProject = data => ({
  type: 'ADD_PROJECT',
  data
})

export const selectProject = id => ({
  type: 'SELECT_PROJECT',
  id
})

export const toggleTaskCompletion = id => ({
  type: 'TOGGLE_TASK_COMPLETION',
  id
})
