import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'antd-mobile'
import { DateTime } from 'luxon'

import styles from './DateRow.module.css'

const DateRow = ({ label, date }) => {
  const dt = DateTime.fromJSDate(date)
  const format = {
    weekday: 'short',
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  }

  return (
    <Flex className={styles.container}>
      <Flex.Item>{label}</Flex.Item>
      <Flex.Item className={styles.date}>
        {date ? dt.toLocaleString(format) : '-'}
      </Flex.Item>
    </Flex>
  )
}

DateRow.propTypes = {
  label: PropTypes.node.isRequired,
  date: PropTypes.object
}

DateRow.displayName = 'DateRow'

export default DateRow
