import React from 'react'
import Div100vh from 'react-div-100vh'
import { NavBar, SegmentedControl } from 'antd-mobile'

import Calendar from './containers/Calendar'

import initialState from './config/initialState'

import 'react-big-calendar/lib/css/react-big-calendar.css'

// eslint-disable-next-line
import styles from './App.css'

import ProjectList from './containers/ProjectList'
import TaskList from './containers/TaskList'
import Overview from './containers/Overview'

const VIEW_PROJECTS = 'Projects'
const VIEW_CALENDAR = 'Calendar'
const VIEW_TASKS = 'Tasks'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.setActiveProject = this.setActiveProject.bind(this)
  }

  state = {
    ...initialState,
    docked: false,
    activeView: VIEW_TASKS
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
    const listActive = activeView === VIEW_PROJECTS
    const calendarActive = activeView === VIEW_CALENDAR
    const overviewActive = activeView === VIEW_TASKS

    const views = [VIEW_CALENDAR, VIEW_PROJECTS, VIEW_TASKS]

    return (
      <Div100vh>
        <div className={'main-area'}>
          {listActive && (
            <>
              <div className={'left-column'}>
                <ProjectList setActiveProject={this.setActiveProject} />
              </div>
              <div className={'right-column'}>
                <TaskList />
              </div>
            </>
          )}
          {calendarActive && <Calendar />}
          {overviewActive && (
            <div className={'overview'}>
              <Overview />
            </div>
          )}
        </div>

        <NavBar mode={'light'}>
          <SegmentedControl
            values={views}
            onChange={this.onChangeView}
            className={'viewSwitch'}
            selectedIndex={views.indexOf(activeView)}
          />
        </NavBar>
      </Div100vh>
    )
  }
}

export default App
