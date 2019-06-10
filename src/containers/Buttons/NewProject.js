import { connect } from 'react-redux'

import NewProject from '../../components/Buttons/NewProject'
import { addProject } from '../../actions'

const mapDispatchToProps = dispatch => ({
  addProject: data => dispatch(addProject(data))
})

export default connect(
  undefined,
  mapDispatchToProps
)(NewProject)
