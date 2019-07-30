import { connect } from 'react-redux'

import Calendar from '../components/Calendar'

const getEvents = tasks =>
  Object.values(tasks).map(task => {
    return {
      id: task.id,
      title: task.title,
      start: task.startTime,
      end: task.endTime
    }
  })

const mapStateToProps = state => ({
  events: getEvents(state.tasks)
})

export default connect(mapStateToProps)(Calendar)
