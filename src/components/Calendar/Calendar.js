import React from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

import { Calendar as C, momentLocalizer } from 'react-big-calendar'
const localizer = momentLocalizer(moment)

const Calendar = ({}) => {
  return (
    <div>
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
