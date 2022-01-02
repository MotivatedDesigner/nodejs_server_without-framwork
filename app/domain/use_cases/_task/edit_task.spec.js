import makeEditTask from './edit_task.js'
import {fakeTask, fakeTaskDatabase} from '../../../../__test__/index.js'
import buildTaskEntity from "../../entities/_task/task.js"
import { Id, Sanitizer } from "../../../../utils/index.js"

const taskEntity = buildTaskEntity(Id, Sanitizer)
const editTask = makeEditTask(taskEntity, fakeTaskDatabase)

describe('edit Task', () => {

  it('must include an id', () => {
    const testTask = fakeTask({ id: undefined })
    expect(editTask(testTask)).rejects.toThrow('You must supply a task id')
  })

  it('must exist in db', () => {
    const testTask = fakeTask({ id: "doesNotExist" })
    expect(editTask(testTask)).rejects.toThrow('Task not found')
  })

  it('must be updated succesufully', async () => {
    const testTask = fakeTask({ id: "doesExist" })
    const updatedTask = await editTask(testTask)
    testTask.modifiedOn = updatedTask?.modifiedOn
    expect(updatedTask).toMatchObject(testTask)
  })

})
