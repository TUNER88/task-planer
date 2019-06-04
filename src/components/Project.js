import React from 'react'
import { List, Progress, Badge } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

const Project = ({
  id,
  progress,
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
      <Brief>
        Next task: {nextTaskTime ? nextTaskTime.toLocaleString() : '-'}
      </Brief>
      <Brief>Project ends: </Brief>
      <Badge selected>
        {completedTaskCount} / {taskCount}
      </Badge>
      <Progress percent={progress} position="normal" />
    </Item>
  )
}

Project.propTypes = {}

export default Project
