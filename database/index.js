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

const Repo = mongoose.model('Repo', repoSchema);

const save = eachRepo => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  let singleRepo = {
    login: eachRepo.owner.login,
    forks: eachRepo.forks_count,
    nameOfRepo: eachRepo.name,
    url: eachRepo.html_url
  };
  //finds unique urls, inserts the singleRepo object in the mongodb REPOS db, and upserts it
  //if it's not
  return Repo.findOneAndUpdate({ url: eachRepo.html_url }, singleRepo, {
    new: true,
    upsert: true // Make this update into an upsert
  }).then(() => {
    console.log('you have saved a single repo');
  });
};

module.exports.save = save;
module.exports.Repo = Repo;
