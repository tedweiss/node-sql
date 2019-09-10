const mysql = require('mysql')

const login = require('../utils/login')
const dbName = 'mydb'

const con = mysql.createConnection({
  host: login.host,
  user: login.user,
  password: login.password,
  database: dbName
})

con.connect(err => {
  if (err) throw err
  console.log('Connected!')
  const sql = 'CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))'
  con.query(sql, (err, result) => {
    if (err) throw err
    console.log('Table created')
  })
})
