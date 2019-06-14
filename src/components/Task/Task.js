import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Checkbox, List } from 'antd-mobile'

import Header from './Header'

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
    <List.Item
      arrow={getArrowDirection()}
      onClick={onClick}
      thumb={<Checkbox onClick={toggle} defaultChecked={completed} />}
    >
      <Header title={title} startTime={startTime} endTime={endTime} />
      {!collapsed && notes && (
        <List.Item.Brief>
          {notes.split('\n').map((item, key) => {
            return (
              <Fragment key={key}>
                {item}
                <br />
              </Fragment>
            )
          })}
        </List.Item.Brief>
      )}
    </List.Item>
  )
}

Task.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool
}

Task.displayName = 'Task'

export default Task
