import React from 'react'
import PropTypes from 'prop-types'

import { Badge as AmBadge } from 'antd-mobile'

const Badge = ({ color, text }) => {
  return (
    <AmBadge
      text={text}
      style={{
        marginLeft: 12,
        padding: '0 3px',
        color: color,
        backgroundColor: 'transparent',
        borderRadius: 2,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: color
      }}
    />
  )
}

Badge.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string
}

Badge.displayName = 'Badge'

export default Badge
