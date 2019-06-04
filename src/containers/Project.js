import { connect } from 'react-redux'

import Project from '../components/Project'
import { selectProject } from '../actions'

const getProject = (state, id) => {
  return state.projects.find(p => p.id === id)
}

const getProgress = (state, id) => {
  const tasks = Object.values(state.tasks)
  const projectTasks = tasks.filter(t => t.projectId === id)
  const completedTasks = projectTasks.filter(t => t.completed).length
  return (completedTasks / projectTasks.length) * 100 || 0
}

const mapStateToProps = (state, props) => ({
  ...getProject(state, props.id),
  progress: getProgress(state, props.id)
})

const mapDispatchToProps = dispatch => ({
  selectProject: id => dispatch(selectProject(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project)
