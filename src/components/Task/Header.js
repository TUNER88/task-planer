import React from 'react'
import PropTypes from 'prop-types'

import { Flex } from 'antd-mobile'
import { DateTime } from 'luxon'

import styles from './Header.module.css'

const Header = ({ title, startTime, endTime }) => {
  const start = DateTime.fromJSDate(startTime)
  const end = DateTime.fromJSDate(endTime)

  const date = start.toLocaleString({ month: 'long', day: '2-digit' })
  const from = start.toLocaleString(DateTime.TIME_24_SIMPLE)
  const to = end.toLocaleString(DateTime.TIME_24_SIMPLE)

  return (
    <Flex>
      <Flex.Item>{title}</Flex.Item>
      {startTime && (
        <Flex.Item className={styles.date}>
          {date} {from} to {to}
        </Flex.Item>
      )}
    </Flex>
  )
}

Header.propTypes = {
  title: PropTypes.node.isRequired,
  startTime: PropTypes.object,
  endTime: PropTypes.object
}

Header.displayName = 'Header'

export default Header
