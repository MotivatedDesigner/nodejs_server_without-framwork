export default function buildMakeTask(Id, Sanitizer) {

  return function makeTask({
    id = Id.makeId(),
    createdOn = Date.now(),
    modifiedOn = Date.now(),
    projectId,
    title,
    description,
    status = "todo"
  } = {}) {

    if (!projectId) 
      throw new Error('Task must belong to a project')

    title = Sanitizer.sanitize(title).trim()
    description = Sanitizer.sanitize(description).trim()

    if (!title) 
      throw new Error("Task must have a title")
    if (title.length <= 2) 
      throw new Error("Task title must be longer than 2 characters")

    return Object.freeze({
      getId: () => id,
      getCreatedOn: () => createdOn,
      getModifiedOn: () => modifiedOn,
      getProjectId: () => projectId,
      getTitle: () => title,
      getDescription: () => description,
      getStatus: () => status,
    })
  }

}
