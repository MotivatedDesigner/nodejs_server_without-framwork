export default function makeEditTask(taskEntity, taskDatabase) {

  return async function editTask({ id, ...changes }) {

    if (!id)
      throw new Error('You must supply an id')

    const existing = await taskDatabase.findById(id)
    if (!existing) 
      throw new RangeError('Task not found')

    const newTask = taskEntity({ ...existing, ...changes, modifiedOn: null })
    // if (comment.getHash() === existing.hash) {
    //   return existing
    // }
    return await taskDatabase.update( newTask.getAll() )
  }
}
