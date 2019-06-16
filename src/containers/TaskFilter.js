import { connect } from 'react-redux'

import TaskFilter from '../components/TaskFilter'
import { setTaskFilter, setTaskSortOption } from '../actions'

const mapStateToProps = state => ({
  filter: state.ui.taskFilter,
  sortOption: state.ui.taskSortOption
})

const mapDispatchToProps = dispatch => ({
  setFilter: search => dispatch(setTaskFilter(search)),
  setSortOption: option => dispatch(setTaskSortOption(option))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskFilter)
