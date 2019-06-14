const uuid = require('uuid/v1')

const uuids = {
  p1: uuid(),
  p2: uuid(),
  p3: uuid(),
  t1: uuid(),
  t2: uuid(),
  t3: uuid(),
  t4: uuid()
}

const initialState = {
  projects: {
    [uuids.p1]: {
      id: uuids.p1,
      title: 'Project 1 🚘'
    },
    [uuids.p2]: {
      id: uuids.p2,
      title: '🔦 Project 2'
    },
    [uuids.p3]: {
      id: uuids.p3,
      title: 'Project 3 🎁'
    }
  },
  tasks: {
    [uuids.t1]: {
      id: uuids.t1,
      projectId: uuids.p1,
      title: 'Task 1',
      completed: true,
      startTime: new Date('2019-06-18T03:24:00'),
      endTime: new Date('2019-06-18T04:24:00'),
      notes: 'Line 1\nLine2'
    },
    [uuids.t2]: {
      id: uuids.t2,
      projectId: uuids.p1,
      title: 'Task 2',
      completed: false,
      startTime: new Date('2019-06-17T03:24:00'),
      endTime: new Date('2019-06-17T04:24:00')
    },
    [uuids.t3]: {
      id: uuids.t3,
      projectId: uuids.p1,
      title: 'Task 3',
      completed: true
    },
    [uuids.t4]: {
      id: uuids.t4,
      projectId: uuids.p2,
      title: 'Task 4',
      completed: true,
      startTime: new Date('2019-06-17T03:24:00'),
      endTime: new Date('2019-06-17T04:24:00')
    }
  },
  ui: {
    activeProject: uuids.p1,
    showTaskList: true,
    showNewTaskForm: false
  }
}

export default initialState
