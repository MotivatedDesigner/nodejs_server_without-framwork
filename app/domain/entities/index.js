import buildTaskEntity from "./task_entity/task.js"
import { Id, Sanitizer } from "#Utils"

export const taskEntity = buildTaskEntity(Id, Sanitizer)