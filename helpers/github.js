const request = require('request');
var rp = require('request-promise');
const config = require('../config.js');
const { save } = require('../database/index.js');

const getReposByUsername = userName => {
  let endpointURL = `https://api.github.com/users/${userName}?${config.TOKEN}`;

  var options = {
    uri: `https://api.github.com/users/${userName}/repos?${config.TOKEN}`,
    qs: {
      access_token: `${config.TOKEN}`
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
  };

  return rp(options)
    .then(function(repos) {
      console.log(`${userName} has ${repos.length} public repos`);

      for (let i = 0; i < repos.length; i++) {
        // if (i === repos.length - 1) {
        //   return save(repos[i]);
        // } else {
        //   save(repos[i]);
        //   // console.log('i have saved index', i);
        // }
        save(repos[i]);
      }
      return repos;
    })
    .catch(function(err) {
      // API call failed...
      console.log('this is my err', err);
    });
};

module.exports.getReposByUsername = getReposByUsername;
