import { removeTask, listTasks } from "#UseCases"

import makeGetTasks from "./_task/get_tasks.js"
import makeDeleteTask from "./_task/delete_task.js"

const getTasks = makeGetTasks(listTasks)
const deleteTask = makeDeleteTask(removeTask)

export const taskController = Object.freeze({
  getTasks,
  deleteTask
})

// const test = async () => {
//   const result = await deleteTask({params:{id: "ckxxilzoy000020uy44oc41mv"}})
//   console.log(result);
// }

// test()