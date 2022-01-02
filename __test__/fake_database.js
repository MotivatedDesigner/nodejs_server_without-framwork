import fs from 'fs'
import path from 'path'

const db = JSON.parse( fs.readFileSync('./__test__/db.json') )

const saveDb = () => fs.writeFileSync('./__test__/db.json', JSON.stringify(db))

const findByIdGeneric = table => id => Promise.resolve( db[table].find( el => el.id === id ) )

const findByProjectId = projectId => {
  const tasks = db["tasks"].filter( task => task.projectId === projectId )
  Promise.resolve(tasks)
}

const insert = object => Promise.resolve(object)

const update = object => Promise.resolve(object)

const remove = id => Promise.resolve(true)

export default Object.freeze({
  tasks: Object.freeze({
    findById: findByIdGeneric("tasks"),
    findByProjectId,
    insert,
    update,
    remove
  })
}) 