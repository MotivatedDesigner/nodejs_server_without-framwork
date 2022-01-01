import faker from 'faker'
import cuid from 'cuid'

const Id = Object.freeze({
  makeId: cuid,
  isValidId: cuid.isCuid
})

export default function makeFakeTask(overrides) {
  const task = {
    id: Id.makeId(),
    createdOn: Date.now(),
    modifiedOn: Date.now(),
    projectId: Id.makeId(),
    title: faker.lorem.words( Math.ceil(Math.random()*3) ),
    description: faker.lorem.paragraph( Math.ceil(Math.random()*2) ),
    status: faker.helpers.randomize(['todo', 'progress', 'done'])
  }
  return {
    ...task,
    ...overrides
  }
}

console.log(makeFakeTask())
