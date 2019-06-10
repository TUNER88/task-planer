import React from 'react'
import { Drawer, NavBar, Icon } from 'antd-mobile'

import initialState from './config/initialState'

// eslint-disable-next-line
import styles from './App.css'

import MainMenu from './components/MainMenu'
import ProjectList from './containers/ProjectList'
import TaskList from './containers/TaskList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.setActiveProject = this.setActiveProject.bind(this)
  }

  state = {
    ...initialState,
    docked: false
  }
  onDock = d => {
    this.setState({
      [d]: !this.state[d]
    })
  }

  setActiveProject(index) {
    this.setState({
      ...this.state,
      ui: {
        ...this.state.ui,
        activeProject: index
      }
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <NavBar
          icon={<Icon type="ellipsis" />}
          onLeftClick={() => this.onDock('docked')}
        >
          Task list
        </NavBar>
        <Drawer
          className="my-drawer"
          style={{ minHeight: document.documentElement.clientHeight }}
          sidebarStyle={{ border: '1px solid #ddd' }}
          sidebar={<MainMenu />}
          open={this.state.docked}
          docked={false}
        >
          <div className={'main-area'}>
            <div className={'left-column'}>
              <ProjectList setActiveProject={this.setActiveProject} />
            </div>
            <div className={'right-column'}>
              <TaskList />
            </div>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default App
