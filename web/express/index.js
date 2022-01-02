import express from "express"
import expressAdapter from "./express_adapter.js"

export default function makeExpressApp(taskController, notFound) {

  return function expressApp() {
    const app = express()
    app.use(express.json())
    // TODO change taskController to projectController
    app.get('/projects/:projectId/tasks', expressAdapter(taskController.getTasks))
    app.delete('/tasks/:taskId', expressAdapter(taskController.deleteTask))
    app.patch('/tasks/:taskId', expressAdapter(taskController.patchTask))
    app.post('/tasks', expressAdapter(taskController.postTask))
    app.use(expressAdapter(notFound))

    return app
  }

}