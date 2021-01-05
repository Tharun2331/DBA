// const config = {
//   user :'root',
//   password :'Password@123',
//   server:'127.0.0.1',
//   database:'Products',
//   options:{
//       trustedconnection: true,
//       enableArithAbort : true, 
//       instancename :'SQLEXPRESS'
//   },
//   port : 55892
// }

// module.exports = config;

// Libraries
const mysql = require("mysql");

// DB connection Instance
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password@123",
  database: "ecommerce1",
  port: 3306,
  timeout: 60000,
});

module.exports = { db };
