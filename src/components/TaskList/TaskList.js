import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd-mobile'

import AddTaskButton from './AddTaskButton'
import Task from '../../containers/Task'
import TaskForm from '../Forms/Task'
import TaskFilter from '../../containers/TaskFilter'

const TaskList = ({
  addTask,
  projectId,
  projectTitle,
  toggleNewTaskForm,
  isFormVisible,
  isListVisible,
  tasks
}) => {
  const renderNewForm = () => {
    return (
      <TaskForm
        projectId={projectId}
        addTask={addTask}
        toggleNewTaskForm={toggleNewTaskForm}
      />
    )
  }

  if (isFormVisible) {
    return renderNewForm()
  }

  return (
    <>
      <TaskFilter />
      {isListVisible && (
        <List renderHeader={() => projectTitle}>
          {tasks.map(task => (
            <Task
              key={task.id}
              id={task.id}
              completed={task.completed}
              title={task.title}
              startTime={task.startTime}
              endTime={task.endTime}
              notes={task.notes}
            />
          ))}
          <AddTaskButton onClick={toggleNewTaskForm} />
        </List>
      )}
    </>
  )
}

TaskList.propTypes = {
  isFormVisible: PropTypes.bool,
  isListVisible: PropTypes.bool,
  addTask: PropTypes.func,
  toggleNewTaskForm: PropTypes.func,
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
