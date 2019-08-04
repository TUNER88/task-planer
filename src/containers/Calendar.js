import { connect } from 'react-redux'

import Calendar from '../components/Calendar'

const mapStateToProps = state => ({
  events: Object.values(state.tasks),
  projects: state.projects
})

export default connect(mapStateToProps)(Calendar)
