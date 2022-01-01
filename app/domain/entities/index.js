import buildTaskEntity from "./_task/task.js"
import { Id, Sanitizer } from "#Utils"

export const taskEntity = buildTaskEntity(Id, Sanitizer)