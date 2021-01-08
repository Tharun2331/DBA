

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
