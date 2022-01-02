export default function buildTaskEntity(Id, Sanitizer) {

  return function taskEntity({
    id = Id.makeId(),
    projectId,
    title,
    description,
    status = "todo",
    createdOn = Date.now(),
    modifiedOn = Date.now()
  } = {}) {

    const states = ['todo', 'progress', 'done']

    if (!projectId) 
      throw new Error('Task must belong to a project')
    if(!states.includes(status))
      throw new Error('Task status not supported')
    if (!title) 
      throw new Error("Task must have a title")
    if (title.length <= 2) 
      throw new Error("Task title must be longer than 2 characters")

    description = Sanitizer.sanitize(description).trim()
    function setStatus(newStatus) {
      if(states.includes(newStatus))
        return status = newStatus
      throw new Error('Task status not supported')
    }
    function setDescription(newDescription) {
      description = Sanitizer.sanitize(newDescription)
    }
    
    return Object.freeze({
      getId: () => id,
      getProjectId: () => projectId,
      getTitle: () => title,
      setTitle: (newTitle) => title = newTitle,
      getDescription: () => description,
      setDescription,
      getStatus: () => status,
      setStatus,
      getCreatedOn: () => createdOn,
      getModifiedOn: () => modifiedOn,
      getAll: () => Object.freeze({
        id,
        projectId,
        title,
        description,
        status,
        createdOn,
        modifiedOn
      })
    })
  }

}
