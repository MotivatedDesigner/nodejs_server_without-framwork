import { removeTask } from "#UseCases"

import makeDeleteTask from "./_task/delete_task.js"

const deleteTask = makeDeleteTask(removeTask)

export const taskController = Object.freeze({
  deleteTask
})

// const test = async () => {
//   const result = await deleteTask({params:{id: "ckxxilzoy000020uy44oc41mv"}})
//   console.log(result);
// }

// test()