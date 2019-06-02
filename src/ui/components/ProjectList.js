import React, { Component } from 'react'
import { Button, List, Progress, WingBlank, WhiteSpace } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

export default class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [
        {
          title: 'Project 1',
          progress: Math.floor(Math.random() * 100 + 1),
            nextTask: "03. June",
            end: "03. June",
        },
        {
          title: 'Project 2',
          progress: Math.floor(Math.random() * 100 + 1),
            nextTask: "03. June",
            end: "03. June",
        },
        {
          title: 'Project 3',
          progress: Math.floor(Math.random() * 100 + 1),
            nextTask: "03. June",
            end: "03. June",
        }
      ]
    }
  }

  render() {
    return (
      <>
        <List renderHeader={() => 'Projects'}>
          {this.state.projects.map((project, index) => (
            <Item key={index} arrow="horizontal">
              {project.title}
              <Brief>Next task: </Brief>
              <Brief>Project ends: </Brief>
              <Progress percent={project.progress} position="normal" />
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

TaskList.propTypes = {}

TaskList.defaultProps = {}

TaskList.displayName = 'TaskList'
