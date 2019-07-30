import React from 'react'

import moment from 'moment'

import { Calendar as C, momentLocalizer } from 'react-big-calendar'
import styles from './Calendar.module.css'

const localizer = momentLocalizer(moment)

const Calendar = () => {
  return (
    <div className={styles.container}>
      <C
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  )
}

Calendar.propTypes = {}

Calendar.displayName = 'Calendar'

export default Calendar
