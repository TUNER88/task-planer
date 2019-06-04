let nextTodoId = 0
export const addProject = text => ({
  type: 'ADD_PROJECT',
  id: nextTodoId++,
  text
})

export const selectProject = id => ({
  type: 'SELECT_PROJECT',
  id
})

export const toggleTaskCompletion = id => ({
  type: 'TOGGLE_TASK_COMPLETION',
  id
})
