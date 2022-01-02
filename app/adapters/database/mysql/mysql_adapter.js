import dbConnection from "./mysql.js"

export default function mysqlAdapter() {

  const findById = (id) => new Promise( (resolve, reject) => {
    dbConnection.query(
      'SELECT * FROM tasks WHERE id = ? ', id, (error, result) => {
        if(error) throw Error(error.message)
        resolve(result)
      })
  })
    
  return Object.freeze({
    findById
  })

}