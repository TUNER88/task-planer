const initialState = {
  data: {
    projects: [
      {
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
        title: 'Project 2',
        nextTask: '03. June',
        end: '03. June',
        tasks: []
      },
      {
        title: 'Project 3',
        nextTask: '03. June',
        end: '03. June',
        tasks: []
      }
    ]
  },
  ui: {
    activeProject: 0
  }
}

export default initialState
