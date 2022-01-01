export default function buildTaskFactory(makeId, sanitize) {

  return function taskFactory({
    id = makeId(),
    createdOn = Date.now(),
    modifiedOn = Date.now(),
    projectId,
    title,
    description,
    status = "todo"
  } = {}) {

    if (!projectId) 
      throw new Error('Task must have belong to a project.')
    if (title.length < 2) 
      throw new Error("Task title must be longer than 2 characters.")

    title = sanitize(title).trim()
    description = sanitize(description).trim()

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
