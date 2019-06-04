import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, List, WingBlank, WhiteSpace } from 'antd-mobile'

import Project from '../containers/Project'

export default class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: props.projects
    }
  }

  render() {
    return (
      <>
        <List renderHeader={() => 'Projects'}>
          {this.state.projects.map((project, index) => (
            <Project key={index} id={project.id} />
          ))}
        </List>
        <WingBlank>
          <WhiteSpace />
          <Button type={'primary'}>Add new</Button>
          <WhiteSpace />
          <Button>Edit</Button>
        </WingBlank>
      </>
    )
  }
}

TaskList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      tasks: PropTypes.array
    })
  ),
  setActiveProject: PropTypes.func
}

TaskList.defaultProps = {}

TaskList.displayName = 'TaskList'
