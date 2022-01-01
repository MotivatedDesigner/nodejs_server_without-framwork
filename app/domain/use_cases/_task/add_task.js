export default function makeAddTask (taskEntity, taskDatabase) {

  return async function addTask(TaskInfo) {
    const task = taskEntity(TaskInfo)
    const exists = await taskDatabase.findById(task.getId())
    if (exists) return exists

    return taskDatabase.insert({
      id: task.getId(),
      projectId: task.getProjectId(),
      title: task.getTitle(),
      description: task.getDescription(),
      status: task.getStatus(),
      createdOn: task.getCreatedOn(),
      modifiedOn: task.getModifiedOn()
    })
  }
  
}
