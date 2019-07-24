const request = require('request');
var rp = require('request-promise');
const config = require('../config.js');

let getReposByUsername = user => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let endpointURL = `https://api.github.com/users/${user}?${config.TOKEN}`;

  //take out the token at the end of request
  // url: `https://api.github.com/users/:${user}/:repo` + config.TOKEN,

  // request.get(${endpointURL}).on
  // let options = {
  //   url: `https://api.github.com/users/:${user}/:repo`,
  //   headers: {
  //     'User-Agent': 'request',
  //     Authorization: `token ${config.TOKEN}`
  //   }
  // };

  // function callback(err, response, body) {
  //   if (!err && response.statusCode === 200) {
  //     const info = JSON.parse(body);
  //     console.log('heres my info', info);
  //   }
  // }

  // request(options, callback);

  var options = {
    uri: `https://api.github.com/users/${user}/repos?${config.TOKEN}`,
    qs: {
      access_token: `${config.TOKEN}`
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
  };

  rp(options)
    .then(function(repos) {
      console.log('this is my respos', repos);
      console.log(`${user} has ${repos.length} public repos`);
    })
    .catch(function(err) {
      // API call failed...
      console.log('this is my err', err);
    });
};

module.exports.getReposByUsername = getReposByUsername;
