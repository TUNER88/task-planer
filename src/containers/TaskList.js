import { connect } from 'react-redux'

import TaskList from '../components/TaskList'

const getProjectTitle = state => {
  const { projects, ui } = state
  return projects[ui.activeProject].title
}

const getVisibleTasks = (tasks, projectId) => {
  return Object.values(tasks).filter(t => t.projectId === projectId)
}

const mapStateToProps = state => ({
  projectTitle: getProjectTitle(state),
  tasks: getVisibleTasks(state.tasks, state.ui.activeProject)
})

export default connect(mapStateToProps)(TaskList)
