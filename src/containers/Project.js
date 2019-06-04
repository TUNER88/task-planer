import { connect } from 'react-redux'

import Project from '../components/Project'
import { selectProject } from '../actions'

const getProject = (state, id) => {
  return state.projects[id]
}

const getProgressDetails = (state, id) => {
  const tasks = Object.values(state.tasks)
  const projectTasks = tasks.filter(t => t.projectId === id)
  const completedTasks = projectTasks.filter(t => t.completed).length
  const progress = (completedTasks / projectTasks.length) * 100 || 0

  return {
    taskCount: projectTasks.length,
    completedTaskCount: completedTasks,
    progress
  }
}

const mapStateToProps = (state, props) => ({
  ...getProject(state, props.id),
  ...getProgressDetails(state, props.id)
})

const mapDispatchToProps = dispatch => ({
  selectProject: id => dispatch(selectProject(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project)
