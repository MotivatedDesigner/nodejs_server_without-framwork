import makeAddTask from './add_task.js'

import {fakeTask, fakeTaskDatabase} from '../../../../__test__/index.js'

describe('add Task', () => {

  it('inserts task in the database', async () => {
    const fakeTask = fakeTask()
    const addTask = makeAddTask(taskEntity, fakeTaskDatabase)
    const inserted = await addTask(fakeTask)
    // expect(inserted).toMatchObject(fakeTask)
  })

})
