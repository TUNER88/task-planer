import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd-mobile'

import { IoMdAdd } from 'react-icons/io'

import styles from './AddTaskButton.module.css'

const AddTaskButton = ({ onClick }) => {
  return (
    <List.Item
      thumb={<IoMdAdd size={'21px'} style={{ color: '#666' }} />}
      onClick={onClick}
    >
      <span className={styles.text}>Add new</span>
    </List.Item>
  )
}

AddTaskButton.propTypes = {
  onClick: PropTypes.func
}

export default AddTaskButton
