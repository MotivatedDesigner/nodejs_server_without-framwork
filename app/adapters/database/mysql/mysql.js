import mysql from 'mysql2'

// export default 
export default mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'project_management'
})