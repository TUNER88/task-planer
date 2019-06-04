import React from 'react'
import { Drawer, NavBar, Icon } from 'antd-mobile'

import initialState from './config/initialState'

// eslint-disable-next-line
import styles from './App.css'

import MainMenu from './ui/components/MainMenu'
import ProjectList from './ui/components/ProjectList'
import TaskList from './ui/components/TaskList'

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
    const { projects } = this.state.data
    const activeProject = projects[this.state.ui.activeProject]

    return (
      <div style={{ height: '100%' }}>
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
              <ProjectList
                projects={projects}
                setActiveProject={this.setActiveProject}
              />
            </div>
            <div className={'right-column'}>
              <TaskList tasks={activeProject.tasks} />
            </div>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default App
