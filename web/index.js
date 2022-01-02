import { taskController, notFoundController } from "#Adapters/controllers"

import makeExpressApp from "./express/index.js"

const expressApp = makeExpressApp(taskController, notFoundController)

export default expressApp()