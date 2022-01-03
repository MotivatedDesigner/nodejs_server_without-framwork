import { fakeTask } from "../../../../__test__/index.js"
import buildTaskEntity from "./task.js"
import { Id, Sanitizer } from "../../../../utils/index.js"

const taskEntity = buildTaskEntity(Id, Sanitizer)

describe('Task Entity', () => {

  it('can be created', () => {
    const testTask = fakeTask()
    const task = taskEntity(testTask)
    expect({
      id: task.getId(),
      projectId: task.getProjectId(),
      title: task.getTitle(),
      description: task.getDescription(),
      status: task.getStatus(),
      dueDate: task.getDueDate(),
      createdOn: task.getCreatedOn(),
      modifiedOn: task.getModifiedOn(),
    }).toEqual(testTask)
  })

  it('can create an id', () => {
    const testTask = fakeTask({ id: undefined })
    const task = taskEntity(testTask)
    expect(task.getId()).toBeDefined()
  })
  
  it('must belong to a project', () => {
    const testTask = fakeTask({ projectId : undefined })
    expect(() => taskEntity(testTask)).toThrow('Task must belong to a project')
  })
  
  it('must have a title', () => {
    const testTask = fakeTask({ title: null })
    expect(() => taskEntity(testTask)).toThrow('Task must have a title')
  })
  
  it('title must be longer than 2 characters', () => {
    const testTask = fakeTask({ title: 'aa' })
    expect(() => taskEntity(testTask)).toThrow('Task title must be longer than 2 characters')
  })

  it('title can be set', () => {
    const testTask = fakeTask({ title: 'title' })
    
    const task = taskEntity(testTask)
    expect(task.getTitle()).toBe('title')

    task.setTitle('newTitle')
    expect(task.getTitle()).toBe('newTitle')
  })
  
  it('description can be set', () => {
    const testTask = fakeTask({ description: 'description' })

    const task = taskEntity(testTask)
    expect(task.getDescription()).toBe('description')

    task.setDescription('newDescription')
    expect(task.getDescription()).toBe('newDescription')
  })

  it('description is sanitized', () => {
    const testTask_cleanDescription = fakeTask({ description: '<p>This is fine</p>' })
    const task_cleanDescription = taskEntity(testTask_cleanDescription)
    expect(task_cleanDescription.getDescription()).toBe('<p>This is fine</p>')
    
    const testTask_dirtydescription = fakeTask({ description: '<script>This is not fine</script><p>but this is ok</p>' })
    const task_dirtyDescription = taskEntity(testTask_dirtydescription)
    expect(task_dirtyDescription.getDescription()).toBe('<p>but this is ok</p>')
  })

  it('status have a default value', () => {
    const testTask = fakeTask({ status: undefined })
    const Task = taskEntity(testTask)
    expect(Task.getStatus()).toBe('todo')
  })

  it('status must be supported', () => {
    const testTask = fakeTask({ status: 'notSupported' })
    expect(() => taskEntity(testTask)).toThrow('Task status not supported')
  })

  it('status can be set & supported to do so', () => {
    const testTask = fakeTask()
    const task = taskEntity(testTask)

    expect(() => task.setStatus('omma')).toThrow('Task status not supported')

    task.setStatus('done')
    expect(task.getStatus()).toBe('done')
  })

  it('createdOn is a valid UTC-GMT', () => {
    const testTask = fakeTask({ createdOn: undefined })
    expect(fakeTask.createdOn).not.toBeDefined()
    const taskCreatedOn = taskEntity(testTask).getCreatedOn()
    expect(taskCreatedOn).toBeDefined()
    expect(new Date(taskCreatedOn).toUTCString().substring(26)).toBe('GMT')
  })

  it('modifiedOn is a valid UTC-GMT', () => {
    const testTask = fakeTask({ modifiedOn: undefined })
    expect(fakeTask.modifiedOn).not.toBeDefined()

    let taskModifiedOn = taskEntity(testTask).getModifiedOn()
    expect(taskModifiedOn).toBeDefined()
    expect(new Date(taskModifiedOn).toUTCString().substring(26)).toBe('GMT')
  })
  // it('must have a source', () => {
  //   const noSource = makeFakeComment({ source: undefined })
  //   expect(() => makeComment(noSource)).toThrow('Comment must have a source.')
  // })
  // it('must have a source ip', () => {
  //   const noIp = makeFakeComment({ source: { ip: undefined } })
  //   expect(() => makeComment(noIp)).toThrow(
  //     'Comment source must contain an IP.'
  //   )
  // })
  // it('can have a source browser', () => {
  //   const withBrowser = makeFakeComment()
  //   expect(
  //     makeComment(withBrowser)
  //       .getSource()
  //       .getBrowser()
  //   ).toBe(withBrowser.source.browser)
  // })
  // it('can have a source referrer', () => {
  //   const withRef = makeFakeComment()
  //   expect(
  //     makeComment(withRef)
  //       .getSource()
  //       .getReferrer()
  //   ).toBe(withRef.source.referrer)
  // })
})
