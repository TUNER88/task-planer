import React from 'react'
import PropTypes from 'prop-types'
import { Button, Modal } from 'antd-mobile'

const prompt = Modal.prompt

const NewProject = ({ addProject }) => {
  return (
    <Button
      type={'primary'}
      onClick={() =>
        prompt('New project', 'Enter project name', [
          { text: 'Cancel' },
          {
            text: 'Submit',
            onPress: value => addProject({ title: value })
          }
        ])
      }
    >
      Add new
    </Button>
  )
}

NewProject.propTypes = {
  addProject: PropTypes.func.isRequired
}

export default NewProject
