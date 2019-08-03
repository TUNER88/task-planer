import React from 'react'
import moment from 'moment'
import { Calendar as C, momentLocalizer } from 'react-big-calendar'

import styles from './Calendar.module.css'

const localizer = momentLocalizer(moment)

const Calendar = ({ events, projects }) => {
  return (
    <div className={styles.container}>
      <C
        events={events}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={event => ({
          style: {
            backgroundColor: projects[event.projectId].color,
            border: '1px solid rgba(0,0,0, 0.15)'
          }
        })}
      />
    </div>
  )
}

Calendar.propTypes = {}

Calendar.displayName = 'Calendar'

export default Calendar
