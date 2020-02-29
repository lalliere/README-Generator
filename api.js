require("dotenv").config();
const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");

//const token = process.env.GITHUB_TOKEN;

const emailQuestion = [
  {
    type: "input",   
    name: "email",
    message: "Enter your email address:"
  }
];

const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(response) {
      userEmail = response.data.email;
      profileImg = response.data.avatar_url;
      

      if (response.data.email === null) {
        inquirer
        .prompt(emailQuestion)
        .then(resp => {
          userEmail = resp;
          appendToFile("README.md", resp)
        })
      }
    });
    
  }
}

function appendToFile(fileName, data) {
  fs.appendFile(fileName, data, function(err) {
    if (err) {
      console.log(err)
    }
    console.log("README.md updated!")
  })
}

// api.getUser("lalliere");
// console.log(userEmail);
// console.log(profileImg);

module.exports = api;