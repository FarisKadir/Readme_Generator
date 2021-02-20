const inquirer = require("inquirer");
const fs = require("fs");


inquirer.prompt([
    {
        type: "input",
        message: "Hi There! Welcome to the readme.md generator! Let's get started! What is the name of your project? ",
        name: "title"
    },
    {
        type: "input",
        message: "Give me a description of what your app does and why you created it.",
        name: "description",
    },
    {
        type: "input",
        message: "If someone needs to install components or features in order to run your app, what are those instructions?",
        name: "install_instructions",
    },
    {
        type: "input",
        message: "How should your app be used?",
        name: "usage",
    },
    {
        type: "input",
        message: "If someone wants to contribute to your project, what are your guidelines?",
        name: "contribute",
    },
    {
        type: "input",
        message: "How can someone test your application?",
        name: "test",
    },
    {
        type: "list",
        message: "Select the licenses for your application:",
        name: "license",
        choices:    [
        {name: 'Apache 2.0 License', value: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'},
        {name: 'Boost Software License 1.0', value: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'},
        {name: 'BSD 3-Clause License', value: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'},
        {name: 'BSD 2-Clause License', value: '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'},
        {name: 'CC0', value: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'},
        {name: 'Attribution 4.0 International', value: '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)'},
        {name: 'Attribution-ShareAlike 4.0 International', value: '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)'},
        {name: 'Attribution-NonCommercial 4.0 International', value: '[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)'},
        {name: 'Attribution-NoDerivates 4.0 International', value: '[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)'},
        {name: 'Attribution-NonCommmercial-ShareAlike 4.0 International', value: '[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)'},
        {name: 'Attribution-NonCommercial-NoDerivatives 4.0 International', value: '[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)'},
        {name: 'Eclipse Public License 1.0', value: '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'},
        {name: 'GNU GPL v3', value: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'},
        {name: 'GNU GPL v2', value: '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'},
        {name: 'GNU AGPL v3', value: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'},
        {name: 'GNU LGPL v3', value: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'},
        {name: 'GNU FDL v1.3', value: '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)'},
        {name: 'IBM Public License Version 1.0', value: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'},
        {name: 'ISC License (ISC)', value: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'},
        {name: 'The MIT License', value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'},
        {name: 'Mozilla Public License 2.0', value: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'},
        {name: 'Attribution License (BY)', value: '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'},
        {name: 'Open Database License (ODbL)', value: '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)'},
        {name: 'Public Domain Dedication and License (PDDL)', value: '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)'},
        {name: 'The Perl License', value: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'},
        {name: 'The Artistic License 2.0', value: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'},
        {name: 'SIL Open Font License 1.1', value: '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)'},
        {name: 'The Unlicense', value: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'},
        {name: 'The Do What the Fuck You Want to Public License', value: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'},
        {name: 'The zlib/libpng License', value: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'}]
        },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address, so that users can contact you with questions?",
        name: "email",
    },

]).then(answers =>    {

        let readme = 
`# ${answers.title}

---

${answers.license}

---

## Description

${answers.description}

---

## Table of Contents

[Installation](#Installation)

[Usage](#Usage)

[License](#License)

[Contribution_Guidelines](#Contribution_Guidelines)

[Tests](#Tests)

[Questions?](#Questions?)

---

## Installation

Here are the installation instructions for my application:

${answers.install_instructions}

---

## Usage

${answers.usage}

---

## License

This application is covered under the ${answers.license} license.

---

## Contribution_Guidelines

${answers.contribute}

---

## Tests

This application is bug free all day, BUT! If you want to test you can follow these instructions:

${answers.test}

---

## Questions?

If you have any questions you can reach me at ${answers.email}. You can also contact me on GitHub, my profile can be found at https://github.com/${answers.username}.


        
        `;
        fs.writeFile("./assets/readme.md", readme, err2 =>   {
            err2 ? console.log(err2) : console.log("Successfully created your readme.md file! It can be found in the assets folder.");
        });
    });
