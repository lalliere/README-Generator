const inquirer = require("inquirer");
const fs = require("fs");
const api = require("./api");

const questions = [
    {
        type: "input",   
        name: "username",
        message: "Enter your GitHub username:"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage for this project?"
    },
    {
        type: "input",
        name: "license",
        message: "What is this project licensed under?"
    },
    {
        type: "input",
        name: "contribution",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "What are the tests associated with this project?"
    }
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
          console.log(err)
        }
        console.log("README.md created!")
    })
}

function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        api.getUser(`${answers.username}`)
        const content = 
`    
# ${answers.title}

## Project Description
${answers.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contribution](#Contribution)
* [Tests](#Tests)

## Installation Instructions
${answers.installation}

## Project Usage
${answers.usage}

## License
${answers.license}

## Contributors
${answers.contribution}

## Tests
${answers.tests}

## Got Questions? Ask Me:
* GitHub Profile: https://github.com/${answers.username}
* My Email: ${api.userEmail}
* ![Profile Image](${api.profileImg})
`      
        writeToFile("README.md", content)
    });
}

init();
