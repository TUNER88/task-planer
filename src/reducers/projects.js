const uuid = require('uuid/v1')

const projects = (state = [], action) => {
  console.log(state, action)
  const newUuid = uuid()
  switch (action.type) {
    case 'ADD_PROJECT':
      return {
        ...state,
        [newUuid]: {
          id: newUuid,
          ...action.data
        }
      }
    default:
      return state
  }
}

export default projects
