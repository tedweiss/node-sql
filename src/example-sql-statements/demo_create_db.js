const mysql = require('mysql')

const login = require('../utils/login')

const con = mysql.createConnection({
  host: login.host,
  user: login.user,
  password: login.password
})

con.connect(err => {
  if (err) throw err
  console.log('Connected!')
  con.query('CREATE DATABASE mydb', function (err, result) {
    if (err) throw err
    console.log('Database created')
  })
})
