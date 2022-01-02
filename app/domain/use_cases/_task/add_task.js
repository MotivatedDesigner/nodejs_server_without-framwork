export default function makeAddTask (taskEntity, taskDatabase) {

  return async function addTask(TaskInfo) {
    const task = taskEntity(TaskInfo)
    const exists = await taskDatabase.findById(task.getId())
    if (exists) 
      return exists
      
    return taskDatabase.insert( task.getAll() )
  }
  
}
