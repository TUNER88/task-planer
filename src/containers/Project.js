import { connect } from 'react-redux'

import Project from '../components/Project'
import { selectProject } from '../actions'

const getProject = (state, id) => {
  return state.projects[id]
}

const getProjectTasks = (state, id) => {
  const tasks = Object.values(state.tasks)
  return tasks.filter(t => t.projectId === id)
}

const getProgressDetails = (state, id) => {
  const projectTasks = getProjectTasks(state, id)
  const completedTasks = projectTasks.filter(t => t.completed).length

  return {
    taskCount: projectTasks.length,
    completedTaskCount: completedTasks
  }
}

const getNextTaskTime = (state, id) => {
  const projectTasks = getProjectTasks(state, id)
  const incompletTasks = projectTasks
    .filter(t => !t.completed)
    .sort((a, b) => a.startTime - b.endTime)

  if (incompletTasks.length) {
    return incompletTasks[0].startTime
  }
}

const mapStateToProps = (state, props) => ({
  ...getProject(state, props.id),
  ...getProgressDetails(state, props.id),
  nextTaskTime: getNextTaskTime(state, props.id)
})

const mapDispatchToProps = dispatch => ({
  selectProject: id => dispatch(selectProject(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project)
