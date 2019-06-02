import React, { Component } from 'react'
import { Checkbox, List, SearchBar } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief
const CheckboxItem = Checkbox.CheckboxItem

export default class ProjectList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleFilter: undefined,
      tasks: [
        {
          title: 'Task 1',
          progress: Math.floor(Math.random() * 100 + 1)
        },
        {
          title: 'Task 2',
          progress: Math.floor(Math.random() * 100 + 1)
        },
        {
          title: 'Task 3',
          progress: Math.floor(Math.random() * 100 + 1)
        }
      ]
    }

    this.onSearch = this.onSearch.bind(this)
  }

  onSearch(text) {
    this.setState({
      titleFilter: text
    })
  }

  getTasks() {
    const { titleFilter, tasks } = this.state

    if (!titleFilter) return tasks

    return tasks.filter(task => task.title.includes(titleFilter))
  }

  render() {
    return (
      <>
        <SearchBar
          placeholder="Search"
          maxLength={8}
          cancelText={'cancel'}
          onChange={this.onSearch}
        />
        <List renderHeader={() => 'Tasks'}>
          {this.getTasks().map((task, index) => (
            <CheckboxItem key={index} arrow="down">
              {task.title}
              <Brief>subtitle</Brief>
            </CheckboxItem>
          ))}
        </List>
      </>
    )
  }
}

ProjectList.propTypes = {}

ProjectList.defaultProps = {}

ProjectList.displayName = 'ProjectList'
