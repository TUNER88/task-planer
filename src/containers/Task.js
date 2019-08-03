import { connect } from 'react-redux'

import Task from '../components/Task'
import { toggleTaskCompletion } from '../actions'

const mapStateToProps = (state, props) => ({
  ...props,
  project: state.projects[props.projectId]
})

const mapDispatchToProps = dispatch => ({
  toggleTaskCompletion: id => dispatch(toggleTaskCompletion(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task)
