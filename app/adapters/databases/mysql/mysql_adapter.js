import dbConnection from "./mysql.js"

export default function mysqlAdapter() {
  return Object.freeze({
    findById,
    findByProjectId,
    insert,
    update,
    remove
  })

  function findById(id) {
    return new Promise((resolve) => {
      dbConnection.query('SELECT * FROM tasks WHERE id = ? ', id, (error, result) => {
          if(error) throw Error(error.message)
          resolve(result)
      })
    })
  }

  function findByProjectId(id) {
    return new Promise((resolve) => {
      dbConnection.query('SELECT * FROM tasks WHERE projectId = ? ', id, (error, result) => {
          if(error) throw Error(error.message)
          resolve(result)
      })
    })
  }

  function insert(task) {
    return new Promise((resolve) => {
      dbConnection.query(
        `INSERT INTO tasks (${Object.keys(task).join(',')}) VALUES (?,?,?,?,?,?,?,?)`, 
        Object.values(task), 
        (error, result) => {
          if(error) throw Error(error.message)
          resolve(result)
        }
      )
    }) 
  }

  function update(task) {
    return new Promise((resolve) => {
      dbConnection.query(
        `UPDATE tasks SET ${Object.keys(task).join('=?,')}=? WHERE id = ?`, 
        [...Object.values(task), task.id],
        (error, result) => {
          if(error) throw Error(error.message)
          resolve(result)
        }
      )
    }) 
  }

  function remove(id) {
    return new Promise((resolve) => {
      dbConnection.query('DELETE FROM tasks WHERE id = ?', id, (error, result) => {
        if(error) throw Error(error.message)
        resolve(result)
      })
    }) 
  }

}