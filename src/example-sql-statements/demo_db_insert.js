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
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')"
  con.query(sql, (err, result) => {
    if (err) throw err
    console.log('1 record inserted, ID: ' + result.insertId)
  })
})
