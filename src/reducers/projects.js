import { getRandomColor } from '../utils'

const uuid = require('uuid/v1')

const projects = (state = [], action) => {
  const newUuid = uuid()
  switch (action.type) {
    case 'ADD_PROJECT':
      return {
        ...state,
        [newUuid]: {
          id: newUuid,
          color: getRandomColor(),
          ...action.data
        }
      }
    default:
      return state
  }
}

export default projects
