export default function makePatchTask(editTask) {

  return async function patchTask(httpRequest) {
    try {
      const toEdit = {
        ...httpRequest.body,
        id: httpRequest.params.taskId
      }
      const patched = await editTask(toEdit)
      return {
        headers: {
          'Content-Type': 'application/json',
          'Last-Modified': new Date(patched.modifiedOn).toUTCString()
        },
        statusCode: 200,
        body: { patched }
      }
    } catch (e) {
      // TODO: Error logging
      console.log(e)
      if (e.name === 'RangeError') {
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 404,
          body: {
            error: e.message
          }
        }
      }
      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}
