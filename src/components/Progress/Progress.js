import React from 'react'
import PropTypes from 'prop-types'

import { Progress as Bar } from 'antd-mobile'
import { Flex } from 'antd-mobile'

import './style.css'

const Progress = ({ completed, total }) => {
  const progress = Math.round((completed / total) * 100 || 0)

  return (
    <Flex>
      <div className={'number'}>
        {completed} / {total}
      </div>
      <Flex.Item>
        <Bar percent={progress} position="normal" />
      </Flex.Item>
      <div className={'percents'}>{progress} %</div>
    </Flex>
  )
}

Progress.propTypes = {
  completed: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}

export default Progress
