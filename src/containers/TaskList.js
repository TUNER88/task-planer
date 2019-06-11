import { connect } from 'react-redux'

import TaskList from '../components/TaskList'
import { addTask, toggleNewTaskForm } from '../actions'

const getProjectTitle = state => {
  const { projects, ui } = state
  return projects[ui.activeProject].title
}

const getVisibleTasks = (tasks, projectId) => {
  return Object.values(tasks).filter(t => t.projectId === projectId)
}

const mapStateToProps = state => ({
  projectTitle: getProjectTitle(state),
  projectId: state.ui.activeProject,
  tasks: getVisibleTasks(state.tasks, state.ui.activeProject),
  isFormVisible: state.ui.showNewTaskForm,
  isListVisible: state.ui.showTaskList
})

const mapDispatchToProps = dispatch => ({
  addTask: data => dispatch(addTask(data)),
  toggleNewTaskForm: () => dispatch(toggleNewTaskForm())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)
