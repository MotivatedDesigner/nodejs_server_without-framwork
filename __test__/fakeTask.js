import faker from 'faker'
import cuid from 'cuid'

const Id = Object.freeze({
  makeId: cuid,
  isValidId: cuid.isCuid
})

export default function makeFakeTask(overrides) {
  const task = {
    id: Id.makeId(),
    projectId: Id.makeId(),
    title: faker.lorem.words( 2 + Math.floor(Math.random()*3) ),
    description: faker.lorem.paragraph( Math.floor(Math.random()*2) ),
    status: faker.helpers.randomize(['todo', 'progress', 'done']),
    createdOn: Date.now(),
    modifiedOn: Date.now(),
  }
  return {
    ...task,
    ...overrides
  }
}
