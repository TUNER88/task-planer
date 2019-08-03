import { connect } from 'react-redux'

import Calendar from '../components/Calendar'

const getEvents = tasks =>
  Object.values(tasks).map(task => {
    return {
      ...task,
      start: task.startTime,
      end: task.endTime
    }
  })

const mapStateToProps = state => ({
  events: getEvents(state.tasks),
  projects: state.projects
})

export default connect(mapStateToProps)(Calendar)
