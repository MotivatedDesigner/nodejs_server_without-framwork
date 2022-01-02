import { removeTask } from "#UseCases"

import makeDeleteTask from "./_task/delete_task.js"

export const deleteTask = makeDeleteTask(removeTask)

// const test = async () => {
//   const result = await deleteTask({params:{id: "ckxxilzoy000020uy44oc41mv"}})
//   console.log(result);
// }

// test()