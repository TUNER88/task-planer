import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, List } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief
const CheckboxItem = Checkbox.CheckboxItem

const Task = ({ id, completed, title, toggleTaskCompletion }) => {
  const toggle = () => {
    toggleTaskCompletion(id)
  }

  return (
    <CheckboxItem arrow="down" defaultChecked={completed} onChange={toggle}>
      {title}
      <Brief>subtitle</Brief>
    </CheckboxItem>
  )
}

Task.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool
}

Task.displayName = 'Task'

export default Task
