const mysql = require("mysql2");

exports.pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    port: 3306,
    password: "5520",
    database: "sql-primer",
  })
  .promise();
