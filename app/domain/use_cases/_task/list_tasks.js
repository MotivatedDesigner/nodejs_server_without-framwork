export default function makeListTask(taskDatabase) {
  return async function listTasks(projectId) {
    if (!projectId)
      throw new Error('You must supply a project id')

    return await taskDatabase.findByProjectId(projectId)
  }
}
