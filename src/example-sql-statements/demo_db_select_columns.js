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
  con.query('SELECT name, address FROM customers', (err, result, fields) => {
    if (err) throw err
    console.log(result)
    console.log(fields)
  })
})
