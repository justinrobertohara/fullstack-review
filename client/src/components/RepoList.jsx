import React from 'react';
import Repo from './Repo.jsx';

export default class RepoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const repos = this.props.repos;
    const listRepos = repos.map(repo => <Repo key={repo.id} repo={repo} />);
    return (
      <div>
        <h4> Repo List Component </h4>
        There are {this.props.repos.length} repos. 
        <ul>{listRepos}</ul>
      </div>
    );
  }
}
