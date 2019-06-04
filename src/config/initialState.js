const initialState = {
  projects: {
    1: {
      id: 1,
      title: 'Project 1',
      nextTask: '03. June',
      end: '03. June'
    },
    2: {
      id: 2,
      title: 'Project 2',
      nextTask: '03. June',
      end: '03. June',
      tasks: []
    },
    3: {
      id: 3,
      title: 'Project 3',
      nextTask: '03. June',
      end: '03. June',
      tasks: []
    }
  },
  tasks: {
    1: {
      id: 1,
      projectId: 1,
      title: 'Task 1',
      completed: true,
      startTime: new Date('2019-06-18T03:24:00'),
      endTime: new Date('2019-06-18T04:24:00')
    },
    2: {
      id: 2,
      projectId: 1,
      title: 'Task 2',
      completed: false,
      startTime: new Date('2019-06-17T03:24:00'),
      endTime: new Date('2019-06-17T04:24:00')
    },
    3: {
      id: 3,
      projectId: 1,
      title: 'Task 3',
      completed: true
    },
    4: {
      id: 4,
      projectId: 2,
      title: 'Task 4',
      completed: true,
      startTime: new Date('2019-06-17T03:24:00'),
      endTime: new Date('2019-06-17T04:24:00')
    }
  },
  ui: {
    activeProject: 1
  }
}

export default initialState
