import { connect } from 'react-redux'

import ProjectList from '../components/ProjectList'
import { selectProject } from '../actions'

const mapStateToProps = state => ({
  projects: Object.values(state.projects)
})

const mapDispatchToProps = dispatch => ({
  selectProject: id => dispatch(selectProject(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList)
