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
  var sql = "DELETE FROM customers WHERE address = 'Mountain 21'"
  con.query(sql, (err, result) => {
    if (err) throw err
    console.log('Number of records deleted: ' + result.affectedRows)
  })
})
