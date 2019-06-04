import React from 'react'
import { List, Progress } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

const Project = ({ id, progress, title, selectProject }) => {
  return (
    <Item
      arrow="horizontal"
      onClick={() => {
        selectProject(id)
      }}
    >
      {title}
      <Brief>Next task: </Brief>
      <Brief>Project ends: </Brief>
      <Progress percent={progress} position="normal" />
    </Item>
  )
}

Project.propTypes = {}

export default Project
