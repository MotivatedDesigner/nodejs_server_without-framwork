import buildTaskEntity from "./task.js"
import { Id, Sanitizer } from "#Utils"

export const taskEntity = buildTaskEntity(Id, Sanitizer)