import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, List, Progress, WingBlank, WhiteSpace } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

export default class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: props.projects
    }
  }

  getProjectProgress(project) {
    const completedTasks = project.tasks.filter(task => task.completed).length
    return (completedTasks / project.tasks.length) * 100 || 0
  }

  render() {
    const { setActiveProject } = this.props
    return (
      <>
        <List renderHeader={() => 'Projects'}>
          {this.state.projects.map((project, index) => (
            <Item
              key={index}
              arrow="horizontal"
              onClick={() => {
                setActiveProject(index)
              }}
            >
              {project.title}
              <Brief>Next task: </Brief>
              <Brief>Project ends: </Brief>
              <Progress
                percent={this.getProjectProgress(project)}
                position="normal"
              />
            </Item>
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
