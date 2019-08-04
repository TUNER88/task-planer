const uuid = require('uuid/v1')

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
    case 'ADD_TASK':
      const newUuid = uuid()
      return {
        ...state,
        [newUuid]: {
          id: newUuid,
          ...action.data
        }
      }
    case 'UPDATE_TASK':
      return {
        ...state,
        [action.data.id]: {
          ...action.data
        }
      }
    default:
      return state
  }
}

export default ui
