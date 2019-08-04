import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd-mobile'

import AddTaskButton from './AddTaskButton'
import Task from '../../containers/Task'
import TaskForm from '../../containers/Forms/Task'
import TaskFilter from '../../containers/TaskFilter'

const TaskList = ({ addTask, projectId, projectTitle, tasks, removeTask }) => {
  const [isFormVisible, setFormVisibility] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState(null)

  const renderNewForm = () => {
    return (
      <TaskForm
        task={taskToEdit}
        projectId={projectId}
        addTask={addTask}
        onClose={() => setFormVisibility(false)}
      />
    )
  }

  const onEdit = task => {
    setTaskToEdit(task)
    setFormVisibility(true)
  }

  if (isFormVisible) {
    return renderNewForm()
  }

  return (
    <>
      <TaskFilter />
      <List renderHeader={() => projectTitle}>
        {tasks.map(task => (
          <Task
            key={task.id}
            onEdit={() => onEdit(task)}
            onDelete={() => removeTask(task.id)}
            showProjectTitle={!projectId}
            {...task}
          />
        ))}
        <AddTaskButton onClick={() => setFormVisibility(true)} />
      </List>
    </>
  )
}

TaskList.propTypes = {
  addTask: PropTypes.func,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      completed: PropTypes.bool
    })
  )
}

TaskList.defaultProps = {}

TaskList.displayName = 'TaskList'

export default TaskList
