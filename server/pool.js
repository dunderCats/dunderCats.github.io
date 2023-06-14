const mysql = require("mysql2");

exports.pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "blue",
    database: "directory_dice",
  })
  .promise();
