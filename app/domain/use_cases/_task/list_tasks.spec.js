import makeListTasks from './list_tasks.js'
import { fakeTaskDatabase } from '../../../../__test__/index.js'

const listTasks = makeListTasks(fakeTaskDatabase)

describe('list Tasks', () => {

  it('must supply a projectId', () => {
    expect(listTasks()).rejects.toThrow('You must supply a project id')
  })

  it('must return empty [] if there is no tasks', async () => {
    const tasks = await listTasks("doesNotExist")
    expect(tasks).toEqual([])
  })

  it('must return an [] of all tasks with the projectId', async () => {
    const tasks = await listTasks("projectId")
    expect(tasks.length).toEqual(2)
  })

})
