DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id: INT,
    title: VARCHAR(30)
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id: INT,
    title: VARCHAR(30),
    salary: DECIMAL,
    department_id: INT
    FOREIGN KEY (department_id),
    REFERENCES department(id),
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id: INT PRIMARY KEY,
    first_name: VARCHAR(30),
    last_name: VARCHAR(30),
    role_id: INT,
    manager_id: INT NULL
    FOREIGN KEY (role_id),
    REFERENCES role(id)
);


