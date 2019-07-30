import React from 'react'

import moment from 'moment'

import { Calendar as C, momentLocalizer } from 'react-big-calendar'
import styles from './Calendar.module.css'

const localizer = momentLocalizer(moment)

const Calendar = ({ events }) => {
  console.log(events)
  return (
    <div className={styles.container}>
      <C
        events={events}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  )
}

Calendar.propTypes = {}

Calendar.displayName = 'Calendar'

export default Calendar
