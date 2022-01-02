import mysql from 'mysql2'

// export default 
export default mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'project_management'
})