import fs from 'fs'
import path from 'path'

const db = JSON.parse( fs.readFileSync('./__test__/db.json') )

const saveDb = () => fs.writeFileSync('./__test__/db.json', JSON.stringify(db))

const findByIdGeneric = table => id => db[table].find( el => el.id == id )

const insertGeneric = table => object => {
  db[table].push(object)
  return object
}

export default Object.freeze({
  tasks: Object.freeze({
    findById: findByIdGeneric("tasks"),
    insert: insertGeneric("tasks"),
  })
}) 