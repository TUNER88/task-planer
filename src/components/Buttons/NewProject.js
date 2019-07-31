import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd-mobile'

import { IoIosAdd } from 'react-icons/io'

const prompt = Modal.prompt

const NewProject = ({ addProject, className, size }) => {
  return (
    <IoIosAdd
      className={className}
      size={size}
      onClick={() =>
        prompt('New project', 'Enter project name', [
          { text: 'Cancel' },
          {
            text: 'Submit',
            onPress: value => addProject({ title: value })
          }
        ])
      }
    />
  )
}

NewProject.propTypes = {
  addProject: PropTypes.func.isRequired
}

export default NewProject
