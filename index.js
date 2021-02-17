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
        type: "input",
        message: "if someone has questions about your app, how can they reach you?",
        name: "questions",
    },
    {
        type: "list",
        message: "Select the licenses for your application:",
        name: "licenses",
        choices:    [`Academic Free License v3.0`,`Apache license 2.0`,`Artistic license 2.0`,`Boost Software License 1.0`,`BSD 2-clause "Simplified" license`,`BSD 3-clause "New" or "Revised" license`,`BSD 3-clause Clear license`,`Creative Commons license family`,`Creative Commons Zero v1.0 Universal`,`Creative Commons Attribution 4.0`,`Creative Commons Attribution Share Alike 4.0`,`Do What The F*ck You Want To Public License`,`Educational Community License v2.0`,`Eclipse Public License 1.0`,`Eclipse Public License 2.0`,`European Union Public License 1.1`,`GNU Affero General Public License v3.0`,`GNU General Public License family`,`GNU General Public License v2.0`,`GNU General Public License v3.0`,`GNU Lesser General Public License family`,`GNU Lesser General Public License v2.1`,`GNU Lesser General Public License v3.0`,`ISC`,`LaTeX Project Public License v1.3c`,`Microsoft Public License`,`MIT`,`Mozilla Public License 2.0`,`Open Software License 3.0`,`PostgreSQL License`,`SIL Open Font License 1.1`,`University of Illinois/NCSA Open Source License`,`The Unlicense`,`zLib License`]
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
