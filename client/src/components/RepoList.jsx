import React from 'react';
import Repo from './Repo.jsx';

export default class RepoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const repos = this.props.repos;
    const listRepos = repos.map(repo => <Repo key={repo._id} repo={repo} />);
    return (
      <div>
        <h4> Top 25 Repos in GitHub Repo Fetcher </h4>
        <ul>{listRepos}</ul>
      </div>
    );
  }
}
