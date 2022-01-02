import express from "express"
import expressAdapter from "./express_adapter.js"

export default function makeExpressApp(taskController) {

  return function expressApp() {
    const app = express()
    app.use(express.json())

    app.delete('/tasks/:id', expressAdapter(taskController.deleteTask))

    return app
  }

}