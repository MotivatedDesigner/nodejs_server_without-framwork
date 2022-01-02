import { taskController } from "#Adapters/controllers"

import makeExpressApp from "./express/index.js"

const expressApp = makeExpressApp(taskController)

export default expressApp()