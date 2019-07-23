const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  user: String,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = user => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  let user = new Repo({ user: user.full_name, forks: user.forks_count });
  user.save(function(err) {
    if (err) {
      return console.log(err);
    } else {
      console.log('you have saved your users repo');
    }
  });
};

module.exports.save = save;
