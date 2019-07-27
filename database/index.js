const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcherRPT');

const repoSchema = mongoose.Schema({
  // TODO: your schema here!
  login: String,
  forks: Number,
  nameOfRepo: String,
  url: { type: String, unique: true }
});

repoSchema.path('url').index({ unique: true });

let Repo = mongoose.model('Repo', repoSchema);

let save = eachRepo => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  let singleRepo = {
    login: eachRepo.owner.login,
    forks: eachRepo.forks_count,
    nameOfRepo: eachRepo.name,
    url: eachRepo.html_url
  };
  return Repo.findOneAndUpdate({ url: eachRepo.html_url }, singleRepo, {
    new: true,
    upsert: true // Make this update into an upsert
  }).then(() => {
    console.log('you have saved a single repo');
  });
  //   function(err) {
  //   if (err) {
  //     return console.log(err);
  //   } else {
  //     console.log('you have saved all of your users repos');
  //   }
  // });
};

module.exports.save = save;

module.exports.Repo = Repo;
