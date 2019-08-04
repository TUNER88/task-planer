import React, { useState } from 'react'
import moment from 'moment'
import { Calendar as C, momentLocalizer } from 'react-big-calendar'

import TaskForm from '../../containers/Forms/Task'

import styles from './Calendar.module.css'

const localizer = momentLocalizer(moment)

const Calendar = ({ events, projects }) => {
  const [activeTask, setActiveTask] = useState(null)
  const editActive = Boolean(activeTask)

  const onSelectEvent = task => {
    setActiveTask(task)
  }

  const closeForm = () => setActiveTask(null)

  return (
    <div className={styles.container}>
      {editActive && (
        <TaskForm task={activeTask} onClose={closeForm} onSave={() => {}} />
      )}
      {!editActive && (
        <C
          events={events}
          localizer={localizer}
          startAccessor="startTime"
          endAccessor="endTime"
          eventPropGetter={event => ({
            style: {
              backgroundColor: projects[event.projectId].color,
              border: '1px solid rgba(0,0,0, 0.15)'
            }
          })}
          onSelectEvent={onSelectEvent}
        />
      )}
    </div>
  )
}

Calendar.propTypes = {}

Calendar.displayName = 'Calendar'

export default Calendar
