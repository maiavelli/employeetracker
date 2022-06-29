INSERT INTO department (name)
VALUES 
('Engineering'),
('Finance'),
('Sales'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
('Software Engineer', 80000, 1),
('Lead Engineer', 120000, 1),
('Accountant', 10000, 2), 
('Account Manager', 150000, 2),
('Salesperson', 70000, 3), 
('Sales Lead', 90000, 3),
('Legal Team Lead', 100000, 4),
('Lawyer', 90000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Beyonce', 'Knowles', 2, null),
('Kelly', 'Rowland', 1, 1),
('Michelle', 'Williams', 4, null),
('Justin', 'Timberlake', 3, null),
('Lance', 'Bass', 6, null),
('Joey', 'Fatone', 5, null),
('Chris', 'Kirkpatrick', 7, null),
('JC', 'Chasez', 8, null);
