import { connect } from 'react-redux'

import TaskList from '../components/TaskList'
import { addTask } from '../actions'
import sortOptions from '../components/TaskFilter/sortOptions'

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
  const { taskFilter, taskSortOption } = state.ui

  return Object.values(state.tasks)
    .filter(t => {
      return t.title.includes(taskFilter)
    })
    .sort(sortMap[taskSortOption])
}

const mapStateToProps = state => ({
  tasks: getVisibleTasks(state)
})

const mapDispatchToProps = dispatch => ({
  addTask: data => dispatch(addTask(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)
