import React from 'react'
import PropTypes from 'prop-types'

import { Badge, Flex } from 'antd-mobile'
import { DateTime } from 'luxon'

import styles from './Header.module.css'

const Header = ({ title, project, startTime, endTime, showProjectTitle }) => {
  const start = DateTime.fromJSDate(startTime)
  const end = DateTime.fromJSDate(endTime)

  const date = start.toLocaleString({ month: 'long', day: '2-digit' })
  const from = start.toLocaleString(DateTime.TIME_24_SIMPLE)
  const to = end.toLocaleString(DateTime.TIME_24_SIMPLE)

  return (
    <Flex>
      <Flex.Item>
        {title}
        {showProjectTitle && (
          <Badge
            text={project.title}
            style={{
              marginLeft: 12,
              padding: '0 3px',
              color: project.color,
              backgroundColor: '#fff',
              borderRadius: 2,
              borderStyle: 'solid',
              borderWidth: '1px',
              borderColor: project.color
            }}
          />
        )}
      </Flex.Item>
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
  endTime: PropTypes.object,
  project: PropTypes.object
}

Header.displayName = 'Header'

export default Header
