import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, List, SearchBar, WhiteSpace, WingBlank } from 'antd-mobile'

import Task from '../containers/Task'

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
    const { projectTitle } = this.props

    return (
      <>
        <SearchBar
          placeholder="Search"
          maxLength={8}
          cancelText={'Cancel'}
          onChange={this.onSearch}
        />
        <List renderHeader={() => projectTitle}>
          {tasks.map((task, index) => (
            <Task
              key={index}
              id={task.id}
              completed={task.completed}
              title={task.title}
            />
          ))}
        </List>
        <WingBlank>
          <WhiteSpace />
          <Button type={'primary'}>Add new</Button>
        </WingBlank>
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
