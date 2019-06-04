import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Checkbox, List } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief
const CheckboxItem = Checkbox.CheckboxItem

const Task = props => {
  const [completed, setCompleted] = useState(props.completed)

  const toggle = e => {
    setCompleted(e.target.checked)
  }

  return (
    <CheckboxItem arrow="down" defaultChecked={completed} onChange={toggle}>
      {props.title}
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
