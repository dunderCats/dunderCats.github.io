const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'blue',
    database: 'directory_dice'
})

connection.connect((err)=>{
    if(err){
        console.error('Error connecting to the database:', err);
    }else{
        console.log('connected to the database');

        //Perform db seeding here

        const insertDataQuery = `INSERT INTO members (first_name, last_name, title, prof_pic)

        VALUES ('Caridad', 'Robles', 'academic intern', '../profilePics/caridad_prof.png'),
        ('Daniel', 'Moreira', 'academic intern', '../profilePics/dan_prof.png'),
        ('Ethan', 'Lee', 'academic intern', '../profilePics/ethan_prof.png'),
        ('Farjana', 'Akter', 'academic intern', '../profilePics/farjana_prof.png'),
        ('Imane', 'Allay', 'academic intern', '../profilePics/imane_prof.png'),
        ('Karina', 'Velasquez', 'academic intern', '../profilePics/Karina_prof.png'),
        ('Leonard', 'Mercedes', 'academic intern', '../profilePics/leo_prof.png'),
        ('Melissa', 'Schaefer', 'academic intern', '../profilePics/melissa_prof.png'),
        ('Nicole', 'Portalatin', 'academic intern', '../profilePics/Nicole_prof.png'),
        ('Mike', 'Reid', 'academic intern', '../profilePics/Reid_prof.png'),
        ('Rob', 'Wadhwani', 'academic intern', '../profilePics/rob_prof.png'),
        ('Rosie', 'Gonzalez', 'academic intern', '../profilePics/Rosie_prof.png'),
        ('Sacoya', 'Adams', 'academic intern', '../profilePics/Sacoya_prof.png'),
        ('Samira', 'Boudjemai', 'academic intern', '../profilePics/Samira_prof.png'),
        ('Tunisia', 'Artope', 'academic intern', '../profilePics/tunisia_prof.png'),
        ('Valerie', 'Perez', 'academic intern', '../profilePics/valerie_prof.png'),
        ('Xani', 'Gonzalez', 'academic intern', '../profilePics/Xani_prof.png')`

          
        connection.query(insertDataQuery, (err) => {
        if (err) {
            console.error('Error inserting data:', err);
        } else {
            console.log('Data inserted');
        }
        });

        connection.end();
    }
})



// CREATING SQL TABLE WITH SEED

//Make sure password for pool is updated to represent your sql server pw: 


// First, create table using this script in sql work bench: 


// CREATE TABLE members (
//     member_id int PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
//     first_name varchar(255) UNIQUE,
//     last_name varchar(255) ,
//     title varchar(255),
//     prof_pic varchar(255)
// );
