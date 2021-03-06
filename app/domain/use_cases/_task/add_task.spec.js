import makeAddTask from './add_task.js'
import {fakeTask, fakeTaskDatabase} from '../../../../__test__/index.js'
import buildTaskEntity from "../../entities/_task/task.js"
import { Id, Sanitizer } from "../../../../utils/index.js"

const taskEntity = buildTaskEntity(Id, Sanitizer)
const addTask = makeAddTask(taskEntity, fakeTaskDatabase)

describe('add Task', () => {

  it('inserts task - existing id', async () => {
    const id = 'testId'
    const testTask = fakeTask({id})
    const inserted = await addTask(testTask)
    expect(inserted.id).toEqual(id)
  })

  it('inserts task', async () => {
    const testTask = fakeTask()
    const inserted = await addTask(testTask)
    expect(inserted).toMatchObject(testTask)
  })

})
