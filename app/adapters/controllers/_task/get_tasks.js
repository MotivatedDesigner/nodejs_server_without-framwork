export default function makeGetTasks(listTasks) {
  return async function getTasks(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const tasks = await listTasks(httpRequest.params.projectId)
      return {
        headers,
        statusCode: 200,
        body: tasks
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
