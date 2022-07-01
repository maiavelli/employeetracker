
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
const figlet = require('figlet');

require('dotenv').config();

// connect to database
const connection = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employee_db' 
});

connection.connect((err) => {
    if (err) throw err;
// function to display welcome image after connection is established
    figlet.text('Employee Tracker', function(err, data) {
            if (err) {
                console.log('Something went wrong...');
            } else {
                console.log(data);
        }
        promptUser();
    });
});


//prompt menu 
const promptUser = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: [
                        'view all departments', 
                        'view all roles',
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
        
        if (choices === 'view all roles') {
            showRoles();
        }

        if (choices === 'view all employees') {
            showEmployees();
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
    const sql = `SELECT * FROM department`;

    connection.query(sql, (err, rows) => {
        if (err) throw (err);
        console.table(rows);
        promptUser();
    });
};

showRoles = () => {
    const sql = `SELECT * FROM role`;

    connection.query(sql, (err, rows) => {
        if (err) throw (err);
        console.table(rows);
        promptUser();
    });
};

showEmployees = () => {
    const sql = `SELECT * FROM employee`;

    connection.query(sql, (err, rows) => {
        if (err) throw (err);
        console.table(rows);
        promptUser();
    });
};

addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addDept',
            message: 'What is the name of the department you would like to add?',
            validate: addDept => {
                if (addDept) {
                    return true;
                } else {
                    console.log('Please enter a name for your department!');
                    return false;
                }
            }
        }
    ])

    .then(answer => {
        const sql = `INSERT into department (title) VALUES (?)`;
        connection.query(sql, answer.addDept, (err, res) => {
            if (err) throw err;
            console.log(`Successfully added ${answer.addDept} to departments!`);
            showDepartments();
        });
    });
};

