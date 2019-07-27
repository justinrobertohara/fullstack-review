const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

let { getReposByUsername } = require('../helpers/github.js');

//heroku added code
app.get('/', (req, res) => {
  res.status(200).send('connection successful');
});

app.listen(process.env.PORT || 3000, function() {
  console.log(
    'Express server listening on port %d in %s mode',
    this.address().port,
    app.settings.env
  );
});

app.post('/repos', function(req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var user = req.body.data;

  getReposByUsername(user).then(
    res.status(202).send(`you have uploaded ${user}'s repos to your page`)
  );
});

const { Repo } = require('../database/index.js');

app.get('/repos', function(req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  Repo.find({})
    .sort({ forks: -1 })
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
