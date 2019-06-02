import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, Icon } from 'antd-mobile'

export default class MainMenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <List>
        <List.Item thumb={<Icon type="check" />}>Projects</List.Item>
        <List.Item thumb={<Icon type="check" />}>Task overview</List.Item>
        <List.Item thumb={<Icon type="check" />}>Today</List.Item>
        <List.Item thumb={<Icon type="check" />}>Settings</List.Item>
      </List>
    )
  }
}

MainMenu.propTypes = {}

MainMenu.defaultProps = {}
