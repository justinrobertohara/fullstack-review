const express = require('express');
let app = express();
let bodyParser = require('body-parser');

const mongoose = require('mongoose');
var db = mongoose.connection;

app.use(express.static(__dirname + '/../client/dist'));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

app.post('/repos', function(req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  console.log('this is my req.body', req.body);
  var user = req.body;

  console.log(user.term);
  res.status(202).send(`you have received a term`);
  // console.log('this is my res', res);
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
