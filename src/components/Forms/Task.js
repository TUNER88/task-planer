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

const Item = List.Item

const REPEAT_MODE_NONE = 0
const REPEAT_MODE_DAILY = 1
const REPEAT_MODE_WEEKLY = 2
const REPEAT_MODE_MONTHLY = 3

const Task = ({ addTask, projectId, toggleNewTaskForm }) => {
  const [data, setData] = useState({
    startDate: new Date(),
    duration: DateTime.local()
      .set({ hour: 1, minute: 0 })
      .toJSDate()
  })

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

  const setStart = startDate => setData({ ...data, startDate })
  const setDuration = duration => {
    return setData({ ...data, duration })
  }
  const setTitle = title => setData({ ...data, title })

  const handleSave = () => {
    addTask({
      ...data,
      projectId
    })
    toggleNewTaskForm()
  }

  return (
    <List renderHeader={() => 'New Task'}>
      <InputItem value={data.title} placeholder="Title" onChange={setTitle} />
      <DatePicker value={data.startDate} onChange={setStart}>
        <List.Item arrow="horizontal">Start</List.Item>
      </DatePicker>
      <DatePicker mode={'time'} value={data.duration} onChange={setDuration}>
        <List.Item arrow="horizontal">Duration</List.Item>
      </DatePicker>
      <Picker data={repeatModes} cols={1} minuteStep={5}>
        <List.Item arrow="horizontal">Repeat</List.Item>
      </Picker>
      <TextareaItem rows={3} placeholder="Notes" autoHeight />
      <Item>
        <Button type="primary" size="small" inline onClick={handleSave}>
          Save
        </Button>
        <Button onClick={toggleNewTaskForm} size="small" inline style={{ marginLeft: '2.5px' }}>
          Cancel
        </Button>
      </Item>
    </List>
  )
}

Task.propTypes = {
  projectId: PropTypes.string,
  addTask: PropTypes.func
}

Task.displayName = 'Task'

export default Task
