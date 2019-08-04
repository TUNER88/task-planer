import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { DateTime } from 'luxon'
import {
  List,
  InputItem,
  Button,
  DatePicker,
  Picker,
  TextareaItem
} from 'antd-mobile'

import ProjectPicker from './ProjectPicker'

const Item = List.Item

const REPEAT_MODE_NONE = 0
const REPEAT_MODE_DAILY = 1
const REPEAT_MODE_WEEKLY = 2
const REPEAT_MODE_MONTHLY = 3

const defaultData = {
  startTime: new Date(),
  duration: DateTime.local()
    .set({ hour: 1, minute: 0 })
    .toJSDate()
}

const Task = ({ addTask, updateTask, projects, projectId, task, onClose }) => {
  const [data, setData] = useState(task || defaultData)
  const isEdit = Boolean(task)

  const repeatModes = [
    {
      label: 'None',
      value: REPEAT_MODE_NONE
    },
    {
      label: 'Daily',
      value: REPEAT_MODE_DAILY
    },
    {
      label: 'Weekly',
      value: REPEAT_MODE_WEEKLY
    },
    {
      label: 'Monthly',
      value: REPEAT_MODE_MONTHLY
    }
  ]

  const setStart = startTime => setData({ ...data, startTime })
  const setDuration = duration => {
    return setData({ ...data, duration })
  }
  const setTitle = title => setData({ ...data, title })
  const setNotes = notes => setData({ ...data, notes })

  const handleSave = () => {
    const newData = {
      ...data,
      projectId: data.projectId || projectId
    }

    isEdit ? updateTask(newData) : addTask(newData)
    onClose()
  }

  const renderHeader = () => {
    return isEdit ? 'Edit' : 'New Task'
  }

  return (
    <List renderHeader={renderHeader}>
      <InputItem value={data.title} placeholder="Title" onChange={setTitle} />
      <ProjectPicker
        projects={projects}
        projectId={data.projectId || projectId}
      />
      <DatePicker value={data.startTime} onChange={setStart}>
        <List.Item arrow="horizontal">Start</List.Item>
      </DatePicker>
      <DatePicker mode={'time'} value={data.duration} onChange={setDuration}>
        <List.Item arrow="horizontal">Duration</List.Item>
      </DatePicker>
      <Picker data={repeatModes} cols={1} minuteStep={5}>
        <List.Item arrow="horizontal">Repeat</List.Item>
      </Picker>
      <TextareaItem
        value={data.notes}
        onChange={setNotes}
        rows={3}
        placeholder="Notes"
        autoHeight
      />
      <Item>
        <Button type="primary" size="small" inline onClick={handleSave}>
          Save
        </Button>
        <Button
          onClick={() => {
            onClose()
          }}
          size="small"
          inline
          style={{ marginLeft: '2.5px' }}
        >
          Cancel
        </Button>
      </Item>
    </List>
  )
}

Task.propTypes = {
  projectId: PropTypes.string,
  addTask: PropTypes.func,
  onClose: PropTypes.func,
  task: PropTypes.object
}

Task.displayName = 'Task'

export default Task
