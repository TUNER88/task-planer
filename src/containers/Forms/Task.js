import { connect } from 'react-redux'

import Task from '../../components/Forms/Task'
import { updateTask } from '../../actions'

const mapStateToProps = (state, props) => ({
  events: Object.values(state.tasks),
  projects: Object.values(state.projects),
  ...props
})

const mapDispatchToProps = dispatch => ({
  updateTask: data => dispatch(updateTask(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task)
