let inquirer = require("inquirer");
let fs = require("fs");
const axios = require("axios");

function userInfo() {
    inquirer
    .prompt({
        type: "input",   
        name: "username",
        message: "Enter your GitHub username:"
    })
    .then(function({ username }) {
        const queryUrl = `https://api.github.com/users/${username}`;

        axios.get(queryUrl).then(function(response) {
        return response.email, response.avatar_url;
        
        });
    });
};


const questions = [
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
        type: "confirm",
        name: "getToc",
        message: "Do you want to include a Table of Contents?"
      },
    {
        type: "input",
        name: "toc",
        message: "Please list the Table of Contents:",
        when: function(responses) {
            return responses.getToc;
        }
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
        console.log("README.md created")
    })
}

function init() {
    userInfo();
    inquirer
    .prompt(questions)
    .then(answers => {
        const content = 
        `# ${answers.title}
        ## Description
        ${answers.description}
        ## Table of Contents
        ${answers.toc}
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
        `
      writeToFile("README.md", content)
    });
}

init();
