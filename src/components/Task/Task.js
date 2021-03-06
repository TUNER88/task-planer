import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Checkbox, List, SwipeAction } from 'antd-mobile'

import Header from './Header'

const Task = ({
  id,
  completed,
  notes,
  onEdit,
  onDelete,
  title,
  toggleTaskCompletion,
  showProjectTitle,
  startTime,
  endTime,
  project
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
    <SwipeAction
      style={{ backgroundColor: 'gray' }}
      autoClose
      right={[
        {
          text: 'Edit',
          onPress: onEdit,
          style: { backgroundColor: '#ddd', color: 'white' }
        },
        {
          text: 'Delete',
          onPress: onDelete,
          style: { backgroundColor: '#F4333C', color: 'white' }
        }
      ]}
    >
      <List.Item
        arrow={getArrowDirection()}
        onClick={onClick}
        thumb={<Checkbox onClick={toggle} defaultChecked={completed} />}
      >
        <Header
          title={title}
          project={project}
          startTime={startTime}
          endTime={endTime}
          showProjectTitle={showProjectTitle}
        />
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
    </SwipeAction>
  )
}

Task.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
}

Task.displayName = 'Task'

export default Task
