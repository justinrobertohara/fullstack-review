const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcherRPT');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  login: String,
  forks: Number,
  nameOfRepo: String
});

// let childSchema = new Schema({ repoName: 'string', forks: Number });

let Repo = mongoose.model('Repo', repoSchema);

let save = eachRepo => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB


  let singleRepo = new Repo({
    login: eachRepo.owner.login,
    forks: eachRepo.forks_count,
    nameOfRepo: eachRepo.name
  });
  singleRepo.save(function(err) {
    if (err) {
      return console.log(err);
    } else {
      console.log('you have saved all of your users repos');
    }
  });
};

module.exports.save = save;
