import React from 'react'
import PropTypes from 'prop-types'

import styles from './ColorIndicator.module.css'

const ColorIndicator = ({ color }) => {
  return (
    <sup className={styles.indicator} style={{ backgroundColor: color }}>
      &nbsp;
    </sup>
  )
}

ColorIndicator.propTypes = {
  color: PropTypes.string.isRequired
}

ColorIndicator.displayName = 'ColorIndicator'

export default ColorIndicator
