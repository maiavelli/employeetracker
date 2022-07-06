# Employee Tracker
![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)

An employee database management system that uses command line, node.js, and mySQL to allow you to view and manage the employees, departments, and roles in your company. 

## Table of Contents
-[Installation](#installation)

-[Usage](#usage)

-[Demo](#demo)

-[Tests](#tests)

-[Questions](#questions)

-[License](#license)

## Installation
To install this package, please make sure you have node.js installed and run the follow code snippet in your command line: 

```md
npm install package.json
```

## Usage 

To use this application, first clone this repository and create a `.env` file using the format in the `.envEXAMPLE` with your mySQL credentials. You may also edit `seeds.sql` with your company data, or you may enter your data via the application. 

Then, log into mySQL on your command line and run the following code: 

```md
source /db/schema.sql;
```

If you decided to create a seed file, run the same code again afterward, with `/db/seeds.sql;` as the source. 

Next, exit mySQL, and run the following command: 

```md
node index.js
```

Once the program is started, follow the prompts and use the application to view, edit, and add to your company's departments, roles, and employees. 

## Demo 
![demo-vid](./Assets/employeetracker.gif)

## Questions
For more information and to see more of my work, please visit my [GitHub](https://github.com/maiavelli/).

For any additional questions or general inquiries, you can contact me at maiacamilledavis@gmail.com.

## License
Copyright (c) `2022`, `Maia Davis`

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.



