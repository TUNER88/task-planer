import taskSortOptions from '../components/TaskFilter/sortOptions'

const uuid = require('uuid/v1')

const uuids = {
  p1: uuid(),
  p2: uuid(),
  p3: uuid(),
  t1: uuid(),
  t2: uuid(),
  t3: uuid(),
  t4: uuid(),
  t5: uuid(),
  t6: uuid(),
  t7: uuid()
}

const initialState = {
  projects: {
    [uuids.p1]: {
      id: uuids.p1,
      title: 'Project 1',
      color: '#4379d5'
    },
    [uuids.p2]: {
      id: uuids.p2,
      title: 'Project 2',
      color: '#41a959'
    },
    [uuids.p3]: {
      id: uuids.p3,
      title: 'Project 3',
      color: '#be5f5f'
    }
  },
  tasks: {
    [uuids.t1]: {
      id: uuids.t1,
      projectId: uuids.p1,
      title: 'Task 4',
      completed: true,
      startTime: new Date('2019-08-05T03:24:00'),
      endTime: new Date('2019-08-05T04:24:00'),
      notes: 'Line 1\nLine2'
    },
    [uuids.t2]: {
      id: uuids.t2,
      projectId: uuids.p1,
      title: 'Task 3',
      completed: false,
      startTime: new Date('2019-08-06T03:10:00'),
      endTime: new Date('2019-08-06T04:20:00')
    },
    [uuids.t3]: {
      id: uuids.t3,
      projectId: uuids.p1,
      title: 'Task 2',
      completed: true,
      startTime: new Date('2019-08-07T01:54:00'),
      endTime: new Date('2019-08-07T02:34:00')
    },
    [uuids.t4]: {
      id: uuids.t4,
      projectId: uuids.p2,
      title: 'Task 1',
      completed: true,
      startTime: new Date('2019-08-05T03:24:00'),
      endTime: new Date('2019-08-05T05:24:00')
    },

    [uuids.t5]: {
      id: uuids.t5,
      projectId: uuids.p3,
      title: 'Task 7',
      completed: false,
      startTime: new Date('2019-08-07T03:24:00'),
      endTime: new Date('2019-08-07T04:24:00')
    },
    [uuids.t6]: {
      id: uuids.t6,
      projectId: uuids.p3,
      title: 'Task 6',
      completed: false,
      startTime: new Date('2019-08-08T06:20:00'),
      endTime: new Date('2019-08-08T08:20:00')
    },
    [uuids.t7]: {
      id: uuids.t7,
      projectId: uuids.p3,
      title: 'Task 5',
      completed: false,
      startTime: new Date('2019-08-09T01:20:00'),
      endTime: new Date('2019-08-09T05:20:00')
    }
  },
  ui: {
    activeProject: uuids.p1,
    taskFilter: '',
    taskSortOption: taskSortOptions.NAME
  }
}

export default initialState
