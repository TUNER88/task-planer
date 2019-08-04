import { connect } from 'react-redux'

import TaskList from '../components/TaskList'
import { addTask } from '../actions'
import sortOptions from '../components/TaskFilter/sortOptions'

const getProjectTitle = state => {
  const { projects, ui } = state
  return projects[ui.activeProject].title
}

const sortByStartDate = (a, b) => a.startTime - b.endTime

const sortByTitle = (a, b) => {
  const textA = a.title.toUpperCase()
  const textB = b.title.toUpperCase()
  return textA < textB ? -1 : textA > textB ? 1 : 0
}

const sortMap = {
  [sortOptions.NAME]: sortByTitle,
  [sortOptions.START_DATE]: sortByStartDate
}

const getVisibleTasks = state => {
  const { activeProject, taskFilter, taskSortOption } = state.ui

  return Object.values(state.tasks)
    .filter(t => {
      if (taskFilter && t.title) {
        return t.projectId === activeProject && t.title.includes(taskFilter)
      }
      return t.projectId === activeProject
    })
    .sort(sortMap[taskSortOption])
}

const mapStateToProps = state => ({
  projectTitle: getProjectTitle(state),
  projectId: state.ui.activeProject,
  tasks: getVisibleTasks(state)
})

const mapDispatchToProps = dispatch => ({
  addTask: data => dispatch(addTask(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)
