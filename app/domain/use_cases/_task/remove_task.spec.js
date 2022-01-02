import makeRemoveTask from './remove_task.js'
import { fakeTaskDatabase } from '../../../../__test__/index.js'

const removeTask = makeRemoveTask(fakeTaskDatabase)

describe('remove Task', () => {

  it('must supply an id', () => {
    expect(removeTask()).rejects.toThrow('You must supply a task id')
  })

  it('must delete nothing if task does not exist', async () => {
    const deleteMessage = await removeTask("doesNotExist")
    expect(deleteMessage).toMatchObject({
      "deletedCount": 0, 
      "message": "Task not found, nothing to delete"
    })
  })

  it('must delete task if exist', async () => {
    const deleteMessage = await removeTask("doesExist")
    expect(deleteMessage).toMatchObject({
      "deletedCount": 1,
      "message": "Task deleted successfully"
    })
  })

})
