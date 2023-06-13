const mysql = require('mysql2')

exports.pool = mysql 
    .createPool({

        host: 'localhost',
        user: 'root',
        password: '123',
        database: 'directory_dice'
    })
.promise()



