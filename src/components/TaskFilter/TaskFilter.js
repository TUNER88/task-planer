import React from 'react'
import PropTypes from 'prop-types'
import { SearchBar, SegmentedControl, WingBlank } from 'antd-mobile'

import sortOptions from './sortOptions'

const TaskFilter = ({ filter, setFilter, sortOption, setSortOption }) => {
  const options = {
    [sortOptions.NAME]: 'Name',
    [sortOptions.START_DATE]: 'Date'
  }

  const optionNames = Object.values(options)
  const optionIndex = Object.keys(options).indexOf(sortOption)

  const onSelectOption = name => {
    const option = Object.keys(options).find(key => options[key] === name)
    setSortOption(option)
  }

  return (
    <>
      <SearchBar
        value={filter}
        placeholder="Search"
        maxLength={8}
        cancelText={'Cancel'}
        onChange={setFilter}
      />
      <WingBlank>
        <p>Sort by:</p>
        <SegmentedControl
          values={optionNames}
          onValueChange={onSelectOption}
          selectedIndex={optionIndex}
        />
      </WingBlank>
    </>
  )
}

TaskFilter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
  sortOption: PropTypes.oneOf([sortOptions.NAME, sortOptions.START_DATE]),
  setSortOption: PropTypes.func.isRequired
}

TaskFilter.displayName = 'TaskFilter'

export default TaskFilter
