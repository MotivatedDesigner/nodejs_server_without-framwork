export default function makeRemoveTask(taskDatabase) {

  return async function removeTask(id) {
    if (!id)
      throw new Error('You must supply a task id')

    const taskToDelete = await taskDatabase.findById(id)
    if (!taskToDelete) 
      return deleteNothing()

    return deleteTask(taskToDelete.id)
  }

  function deleteNothing() {
    return {
      deletedCount: 0,
      message: 'Task not found, nothing to delete'
    }
  }

  async function deleteTask(id) {
    await taskDatabase.remove(id)
    return {
      deletedCount: 1,
      message: 'Task deleted successfully'
    }
  }

}
