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
  var sql = "UPDATE customers SET address = 'Canyon 123' WHERE id = '9'"
  con.query(sql, (err, result) => {
    if (err) throw err
    console.log(result.affectedRows + ' record(s) updated')
  })
})
