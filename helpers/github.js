const request = require('request');
const config = require('../config.js');

let getReposByUsername = (user, cb) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let endpointURL = `https://api.github.com/users/${user}?${config.TOKEN}`

  request.post('http://localhost:1128/').auth()

  let options = {
    url: `https://api.github.com/users/:${user}/:repo` + config.TOKEN,
    headers: {
      'User-Agent': 'request',
      Authorization: `token ${config.TOKEN}`
    }
  };




  $.ajax({
    method: 'GET',
    url: `https://api.github.com/users/${owner}/` + config.TOKEN,
    contentType: "application/json"
    data: JSON.stringify({
      "content": "aGVsbG8=",
      "encoding": "utf-8"
    })
  }).done(function(data) {
    console.log(data)
  });
};

module.exports.getReposByUsername = getReposByUsername;
