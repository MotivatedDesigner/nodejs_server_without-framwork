import express from "express"
import expressAdapter from "./express_adapter.js"

export default function makeExpressApp(taskController) {

  return function expressApp() {
    const app = express()
    app.use(express.json())
    // TODO change taskController to projectController
    app.get('/projects/:projectId/tasks', expressAdapter(taskController.getTasks))
    app.delete('/tasks/:taskId', expressAdapter(taskController.deleteTask))

    return app
  }

}