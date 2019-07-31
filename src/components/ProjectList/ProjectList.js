import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd-mobile'

import Project from '../../containers/Project'
import NewProject from '../../containers/Buttons/NewProject'

import styles from './ProjectList.module.css'

const ProjectList = ({ projects }) => {
  const renderHeader = () => {
    return (
      <div>
        Projects
        <NewProject className={styles.addIcon} size={'21px'} />
      </div>
    )
  }

  return (
    <List renderHeader={renderHeader}>
      {projects.map((project, index) => (
        <Project key={index} id={project.id} />
      ))}
    </List>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      tasks: PropTypes.array
    })
  ),
  setActiveProject: PropTypes.func
}

ProjectList.displayName = 'ProjectList'

export default ProjectList
