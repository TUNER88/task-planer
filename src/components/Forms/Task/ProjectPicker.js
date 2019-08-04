import React from 'react'
import PropTypes from 'prop-types'

import { List, Picker } from 'antd-mobile'

const ProjectPicker = ({ projects, projectId, onChange }) => {
  const projectLabels = projects.map(project => {
    return { value: project.id, label: project.title }
  })

  return (
    <Picker
      data={projectLabels}
      cols={1}
      onChange={onChange}
      value={[projectId]}
    >
      <List.Item arrow="horizontal">Project</List.Item>
    </Picker>
  )
}

ProjectPicker.propTypes = {
  projects: PropTypes.array,
  projectId: PropTypes.string,
  onChange: PropTypes.func
}

ProjectPicker.displayName = 'ProjectPicker'

export default ProjectPicker
