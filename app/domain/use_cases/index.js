import { taskEntity } from "#Entities"
import { taskDatabase } from "#Adapters/databases"

import makeAddTask from "./_task/add_task.js"
import makeEditTask from "./_task/edit_task.js"
import makeRemoveTask from "./_task/remove_task.js"
import makeListTasks from "./_task/list_tasks.js"

export const addTask = makeAddTask(taskEntity, taskDatabase)
export const editTask = makeEditTask(taskEntity, taskDatabase)
export const removeTask = makeRemoveTask(taskDatabase)
export const listTasks = makeListTasks(taskDatabase)