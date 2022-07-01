
//  ______                 _                         __  __                                   
// |  ____|               | |                       |  \/  |                                  
// | |__   _ __ ___  _ __ | | ___  _   _  ___  ___  | \  / | __ _ _ __   __ _  __ _  ___ _ __ 
// |  __| | '_ ` _ \| '_ \| |/ _ \| | | |/ _ \/ _ \ | |\/| |/ _` | '_ \ / _` |/ _` |/ _ \ '__|
// |  ____| | | | | |  _) | | (_) | |_| |  __/  __/ | |  | | (_| | | | | (_| | (_| |  __/ |   
// |______|_| |_| |_| .__/|_|\___/ \__, |\___|\___| |_|  |_|\__,_|_| |_|\__,_|\__, |\___|_|   
//                  | |             __/ |                                      __/ |          
//                  |_|            |___/                                      |___/    

// dependencies 
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

require('dotenv').config();

// connect to database
const connection = mysql.createConnection( {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME  
});

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    welcome();
});

// function to display welcome image after connection is established
welcome = () => {
    console.log(" ______                 _                         __  __ " )                              
    console.log("|  ____|               | |                       |  \/  |" )                               
    console.log("| |__   _ __ ___  _ __ | | ___  _   _  ___  ___  | \  / | __ _ _ __   __ _  __ _  ___ _ __") 
    console.log("|  __| | '_ ` _ \| '_ \| |/ _ \| | | |/ _ \/ _ \ | |\/| |/ _` | '_ \ / _` |/ _` |/ _ \ '__|")
    console.log("|  ____| | | | | |  _) | | (_) | |_| |  __/  __/ | |  | | (_| | | | | (_| | (_| |  __/ |")   
    console.log("|______|_| |_| |_| .__/|_|\___/ \__, |\___|\___| |_|  |_|\__,_|_| |_|\__,_|\__, |\___|_|")   
    console.log("                 | |             __/ |                                      __/ |")         
    console.log("                 |_|            |___/                                      |___/")
    promptUser();
};

//prompt menu 
const promptUser = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: [
                        'view all departments', 
                        'view all employees', 
                        'add a department', 
                        'add a role', 
                        'add an employee', 
                        'update an employee role', 
                        'exit the application'
                    ]
        }
    ])

    .then((answers) => {
        const { choices } = answers;

        if (choices === 'view all departments') {
            showDepartments();
        }

        if (choices === 'view all employees') {
            showEmployees();
        }

        if (choices === 'view all roles') {
            showRoles();
        }

        if (choices === 'add a department') {
            addDepartment();
        }

        if (choices === 'add a role') {
            addRole();
        }

        if (choices === 'add an employee') {
            addEmployee();
        }

        if (choices === 'update an employee role') {
            updateEmployee();
        }

        if (choices === 'exit the application') {
            connection.end();
        };
    });
};

showDepartments = () => {
    console.log('here are the current departments...')
    const sql = `SELECT department.id AS id, deparment.name AS department FROM department`;

    connection.promise().query(sql, (err, rows) => {
        if (err) throw (err);
        console.table(rows);
    })
}