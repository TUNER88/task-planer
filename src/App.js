import React from 'react'
import { SegmentedControl, NavBar, Icon } from 'antd-mobile'
import Calendar from './components/Calendar'

import initialState from './config/initialState'

import 'react-big-calendar/lib/css/react-big-calendar.css'

// eslint-disable-next-line
import styles from './App.css'

import ProjectList from './containers/ProjectList'
import TaskList from './containers/TaskList'

const VIEW_LIST = 'List'
const VIEW_CALENDAR = 'Calendar'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.setActiveProject = this.setActiveProject.bind(this)
  }

  state = {
    ...initialState,
    docked: false,
    activeView: VIEW_CALENDAR
  }
  onDock = d => {
    this.setState({
      [d]: !this.state[d]
    })
  }

  onChangeView = event => {
    this.setState({
      activeView: event.nativeEvent.value
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
    const { activeView } = this.state
    const listActive = activeView === VIEW_LIST
    const calendarActive = activeView === VIEW_CALENDAR

    return (
      <div>
        <NavBar
          icon={<Icon type="ellipsis" />}
          onLeftClick={() => this.onDock('docked')}
        >
          Task list
        </NavBar>

        {listActive && (
          <div className={'main-area'}>
            <div className={'left-column'}>
              <ProjectList setActiveProject={this.setActiveProject} />
            </div>
            <div className={'right-column'}>
              <TaskList />
            </div>
          </div>
        )}
        {calendarActive && (
          <div className={'main-area'}>
            <Calendar />
          </div>
        )}

        <NavBar mode={"light"}>
            <SegmentedControl
              values={[VIEW_LIST, VIEW_CALENDAR]}
              onChange={this.onChangeView}
              className={'viewSwitch'}
            />
        </NavBar>

      </div>
    )
  }
}

export default App
