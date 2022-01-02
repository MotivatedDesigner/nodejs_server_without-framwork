import makeRemoveTask from './remove_task.js'
import { fakeTaskDatabase } from '../../../../__test__/index.js'

const removeTask = makeRemoveTask(fakeTaskDatabase)

describe('remove Task', () => {

  it('must supply an id', () => {
    expect(removeTask()).rejects.toThrow('You must supply a task id')
  })

})
