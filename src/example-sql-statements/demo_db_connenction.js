const mysql = require('mysql')

const login = require('../utils/login')
// use loginExample.js as an example of what login.js should look like

const con = mysql.createConnection({
  host: login.host,
  user: login.user,
  password: login.password
})

con.connect((err, result) => {
  if (err) throw err
  console.log('Connected!')
  if (err) throw err
  console.log('Result: ' + JSON.stringify(result))
})
