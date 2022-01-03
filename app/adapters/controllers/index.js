import { 
  removeTask, 
  listTasks, 
  editTask, 
  addTask 
} from "#UseCases"

import notFound from "./not_found.js"

import makeGetTasks from "./_task/get_tasks.js"
import makeDeleteTask from "./_task/delete_task.js"
import makePatchTask from "./_task/patch_task.js"
import makePostTask from "./_task/post_task.js"

const getTasks = makeGetTasks(listTasks)
const deleteTask = makeDeleteTask(removeTask)
const patchTask = makePatchTask(editTask)
const postTask = makePostTask(addTask)

export const notFoundController = notFound 
export const taskController = Object.freeze({
  getTasks,
  deleteTask,
  patchTask,
  postTask
})

// const test = async () => {
//   const result = await deleteTask({params:{id: "ckxxilzoy000020uy44oc41mv"}})
//   console.log(result);
// }

// test()