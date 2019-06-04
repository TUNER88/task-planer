import { connect } from 'react-redux'

import TaskList from '../components/TaskList'

const getVisibleTasks = (tasks, projectId) => {
  return Object.values(tasks).filter(t => t.projectId === projectId)
}

const mapStateToProps = state => ({
  tasks: getVisibleTasks(state.tasks, state.ui.activeProject)
})

export default connect(mapStateToProps)(TaskList)
