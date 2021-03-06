export default function makeDeleteTask(removeTask) {

  return async function deleteTask(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const deleted = await removeTask(httpRequest.params.taskId)
      return {
        headers,
        statusCode: deleted.deletedCount === 0 ? 404 : 200,
        body: { deleted }
      }
    } catch (e) {
      // TODO: Error logging
      console.log(e)
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }

}
