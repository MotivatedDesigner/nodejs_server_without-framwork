import { makeFakeTask } from "../../../__test__/index.js"
import buildMakeTask from "./task.js"
import { Id, Sanitizer } from "../../../utils/index.js"

const makeTask = buildMakeTask(Id, Sanitizer)

describe('Task', () => {

  it('can be created', () => {
    const fakeTask = makeFakeTask()
    const task = makeTask(fakeTask)
    expect({
      id: task.getId(),
      projectId: task.getProjectId(),
      title: task.getTitle(),
      description: task.getDescription(),
      status: task.getStatus(),
      createdOn: task.getCreatedOn(),
      modifiedOn: task.getModifiedOn(),
    }).toEqual(fakeTask)
  })

  it('can create an id', () => {
    const fakeTask = makeFakeTask({ id: undefined })
    const task = makeTask(fakeTask)
    expect(task.getId()).toBeDefined()
  })
  
  it('must belong to a project', () => {
    const fakeTask = makeFakeTask({ projectId : undefined })
    expect(() => makeTask(fakeTask)).toThrow('Task must belong to a project')
  })
  
  it('must have a title', () => {
    const fakeTask = makeFakeTask({ title: null })
    expect(() => makeTask(fakeTask)).toThrow('Task must have a title')
  })
  
  it('title must be longer than 2 characters', () => {
    const fakeTask = makeFakeTask({ title: 'aa' })
    expect(() => makeTask(fakeTask)).toThrow('Task title must be longer than 2 characters')
  })

  it('title can be set', () => {
    const fakeTask = makeFakeTask({ title: 'title' })
    
    const task = makeTask(fakeTask)
    expect(task.getTitle()).toBe('title')

    task.setTitle('newTitle')
    expect(task.getTitle()).toBe('newTitle')
  })
  
  it('description can be set', () => {
    const fakeTask = makeFakeTask({ description: 'description' })

    const task = makeTask(fakeTask)
    expect(task.getDescription()).toBe('description')

    task.setDescription('newDescription')
    expect(task.getDescription()).toBe('newDescription')
  })

  it('description is sanitized', () => {
    const fakeTask_cleanDescription = makeFakeTask({ description: '<p>This is fine</p>' })
    const task_cleanDescription = makeTask(fakeTask_cleanDescription)
    expect(task_cleanDescription.getDescription()).toBe('<p>This is fine</p>')
    
    const fakeTask_dirtydescription = makeFakeTask({ description: '<script>This is not fine</script><p>but this is ok</p>' })
    const task_dirtyDescription = makeTask(fakeTask_dirtydescription)
    expect(task_dirtyDescription.getDescription()).toBe('<p>but this is ok</p>')
  })

  it('status have a default value', () => {
    const fakeTask = makeFakeTask({ status: undefined })
    const Task = makeTask(fakeTask)
    expect(Task.getStatus()).toBe('todo')
  })

  it('status must be supported', () => {
    const fakeTask = makeFakeTask({ status: 'notSupported' })
    expect(() => makeTask(fakeTask)).toThrow('Task status not supported')
  })

  it('status can be set & supported to do so', () => {
    const fakeTask = makeFakeTask()
    const task = makeTask(fakeTask)

    expect(() => task.setStatus('omma')).toThrow('Task status not supported')

    task.setStatus('done')
    expect(task.getStatus()).toBe('done')
  })

  it('createdOn is a valid UTC-GMT', () => {
    const fakeTask = makeFakeTask({ createdOn: undefined })
    expect(fakeTask.createdOn).not.toBeDefined()
    const taskCreatedOn = makeTask(fakeTask).getCreatedOn()
    expect(taskCreatedOn).toBeDefined()
    expect(new Date(taskCreatedOn).toUTCString().substring(26)).toBe('GMT')
  })

  it('modifiedOn is a valid UTC-GMT', () => {
    const fakeTask = makeFakeTask({ modifiedOn: undefined })
    expect(fakeTask.modifiedOn).not.toBeDefined()

    let taskModifiedOn = makeTask(fakeTask).getModifiedOn()
    expect(taskModifiedOn).toBeDefined()
    expect(new Date(taskModifiedOn).toUTCString().substring(26)).toBe('GMT')
  })

  it('modifiedOn can be set to Date.now() & is a valid UTC-GMT', () => {
    const fakeTask = makeFakeTask()
    const task = makeTask(fakeTask)
  
    task.setModifiedOn()
    const taskModifiedOn = task.getModifiedOn()
    expect(taskModifiedOn).toEqual(Date.now())
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
