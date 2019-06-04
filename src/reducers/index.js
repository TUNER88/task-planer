import { combineReducers } from 'redux'
import projects from './projects'
import tasks from './tasks'
import ui from './ui'

export default combineReducers({
  projects,
  tasks,
  ui
})
