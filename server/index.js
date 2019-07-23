const express = require('express');
let app = express();
let bodyParser = require('body-parser');

const mongoose = require('mongoose');
var db = mongoose.connection;

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());

app.post('/repos', function(req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function(req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

  Repo.find({})
    .sort({ forks: 1 })
    .limit(25)
    .exec(function(err, users) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(users);
      }
    });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
