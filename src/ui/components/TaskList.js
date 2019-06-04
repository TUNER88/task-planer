import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, SearchBar } from 'antd-mobile'

import Task from './Task'

export default class ProjectList extends Component {
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

  render() {
    const tasks = this.getTasks()

    return (
      <>
        <SearchBar
          placeholder="Search"
          maxLength={8}
          cancelText={'cancel'}
          onChange={this.onSearch}
        />
        <List renderHeader={() => 'Tasks'}>
          {tasks.map((task, index) => (
            <Task key={index} completed={task.completed} title={task.title} />
          ))}
        </List>
      </>
    )
  }
}

ProjectList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      completed: PropTypes.bool
    })
  )
}

ProjectList.defaultProps = {}

ProjectList.displayName = 'ProjectList'
