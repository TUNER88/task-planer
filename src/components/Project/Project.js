import React from 'react'
import { List } from 'antd-mobile'

import Progress from '../Progress'
import DateRow from './DateRow'

const Item = List.Item

const Project = ({
  id,
  title,
  selectProject,
  taskCount,
  completedTaskCount,
  nextTaskTime
}) => {
  return (
    <Item
      arrow="horizontal"
      onClick={() => {
        selectProject(id)
      }}
    >
      {title}
      <DateRow label="Next task:" date={nextTaskTime} />
      <DateRow label="Project ends:" />
      <Progress completed={completedTaskCount} total={taskCount} />
    </Item>
  )
}

Project.propTypes = {}

export default Project
