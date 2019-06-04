const initialState = {
  projects: [
    {
      id: 1,
      title: 'Project 1',
      nextTask: '03. June',
      end: '03. June',
      tasks: [
        {
          title: 'Task 1',
          completed: true
        },
        {
          title: 'Task 2',
          completed: false
        },
        {
          title: 'Task 3',
          completed: true
        }
      ]
    },
    {
      id: 2,
      title: 'Project 2',
      nextTask: '03. June',
      end: '03. June',
      tasks: []
    },
    {
      id: 3,
      title: 'Project 3',
      nextTask: '03. June',
      end: '03. June',
      tasks: []
    }
  ],
  tasks: {
    1: {
      id: 1,
      projectId: 1,
      title: 'Task 1',
      completed: true
    },
    2: {
      id: 2,
      projectId: 1,
      title: 'Task 2',
      completed: false
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
      completed: true
    }
  },
  ui: {
    activeProject: 1
  }
}

export default initialState
