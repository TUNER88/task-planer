import React from 'react'
import PropTypes from 'prop-types'
import { Button, List, WhiteSpace, WingBlank } from 'antd-mobile'

import Project from '../containers/Project'
import NewProject from '../containers/Buttons/NewProject'

const ProjectList = ({ projects }) => {
  return (
    <>
      <List renderHeader={() => 'Projects'}>
        {projects.map((project, index) => (
          <Project key={index} id={project.id} />
        ))}
      </List>
      <WingBlank>
        <WhiteSpace />
        <NewProject />
        <WhiteSpace />
        <Button>Edit</Button>
      </WingBlank>
    </>
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
