import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Checkbox, List } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief
const CheckboxItem = Checkbox.CheckboxItem

const Task = ({
  id,
  completed,
  notes,
  title,
  toggleTaskCompletion,
  startTime,
  endTime
}) => {
  const [collapsed, setCollapsed] = useState(true)

  const toggle = () => {
    toggleTaskCompletion(id)
  }

  const onClick = e => {
    if (e.target.type !== 'checkbox') {
      if (notes) {
        setCollapsed(!collapsed)
      }
    }
  }

  const getArrowDirection = () => (collapsed ? 'down' : 'up')

  return (
    <CheckboxItem
      arrow={getArrowDirection()}
      defaultChecked={completed}
      onChange={toggle}
      onClick={onClick}
    >
      {title}
      <Brief>subtitle</Brief>
      <Brief>Start time: {startTime ? startTime.toLocaleString() : '-'}</Brief>
      <Brief>End time: {endTime ? endTime.toLocaleString() : '-'}</Brief>
      {!collapsed && notes && (
        <Brief>
          {notes.split('\n').map((item, key) => {
            return (
              <Fragment key={key}>
                {item}
                <br />
              </Fragment>
            )
          })}
        </Brief>
      )}
    </CheckboxItem>
  )
}

Task.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool
}

Task.displayName = 'Task'

export default Task
