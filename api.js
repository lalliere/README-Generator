require("dotenv").config();
const token = process.env.GITHUB_TOKEN;
const axios = require("axios");

const api = {

  getUser(username) {
    const queryURL = `https://api.github.com/users/${username}`;
    
    axios.get(queryURL, {
      headers:{
        "Authorization": `token ${token}`
      }
    }).then(function(response) {
      userEmail = response.data.email;
      profileImg = response.data.avatar_url;
      
      // console.log(userEmail);
      // console.log(profileImg);
    })
  }
}


//api.getUser("HannahYudkin");

module.exports = api;