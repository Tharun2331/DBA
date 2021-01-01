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
const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password@123",
  database: "ecommerce",
  port: 3306,
  timeout: 60000,
});

module.exports = { mysqlConnection };
