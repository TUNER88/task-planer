import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, List, SearchBar, WhiteSpace, WingBlank } from 'antd-mobile'

import Task from '../containers/Task'
import TaskForm from '../components/Forms/Task'

export default class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleFilter: undefined
    }

    this.onSearch = this.onSearch.bind(this)
  }

  onSearch(text) {
    this.setState({
      titleFilter: text
    })
  }

  getTasks() {
    const { titleFilter } = this.state
    const { tasks } = this.props

    if (!titleFilter) return tasks

    return tasks.filter(task => task.title.includes(titleFilter))
  }

  renderNewForm() {
    const { addTask, projectId, toggleNewTaskForm } = this.props
    return (
      <TaskForm
        projectId={projectId}
        addTask={addTask}
        toggleNewTaskForm={toggleNewTaskForm}
      />
    )
  }

  render() {
    const {
      projectTitle,
      toggleNewTaskForm,
      isFormVisible,
      isListVisible
    } = this.props

    if (isFormVisible) {
      return this.renderNewForm()
    }

    const tasks = this.getTasks()

    return (
      <>
        <SearchBar
          placeholder="Search"
          maxLength={8}
          cancelText={'Cancel'}
          onChange={this.onSearch}
        />
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
          </List>
        )}
        <WingBlank>
          <WhiteSpace />
          <Button type={'primary'} onClick={toggleNewTaskForm}>
            Add new
          </Button>
        </WingBlank>
      </>
    )
  }
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
