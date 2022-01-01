import fs from 'fs'
import path from 'path'

const db = JSON.parse( fs.readFileSync('./__test__/db.json') )

const findByIdGeneric = table => id => db[table].find( el => el.id == id )

export default Object.freeze({
  tasks: Object.freeze({
    findById: findByIdGeneric("tasks")
  })
}) 