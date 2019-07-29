import React from 'react'
import { SegmentedControl, NavBar, Icon, TabBar, WingBlank } from 'antd-mobile'

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
    return (
      <div>
        <NavBar
          icon={<Icon type="ellipsis" />}
          onLeftClick={() => this.onDock('docked')}
        >
          Task list
        </NavBar>

          <div className={'main-area'}>
            <div className={'left-column'}>
              <ProjectList setActiveProject={this.setActiveProject} />
            </div>
            <div className={'right-column'}>
              <TaskList />
            </div>
          </div>
        <WingBlank size="lg" className="sc-example">
          <SegmentedControl values={['Segment1', 'Segment2']} />
        </WingBlank>
      </div>
    )
  }
}

export default App
