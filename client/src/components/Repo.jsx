import React from 'react';

const RepoList = props => (
  <div>
    <h4> {props.repo.login} Github's profile</h4>
    There are the {props.repo.forks} forks. For {props.repo.nameOfRepo}
  </div>
);

export default RepoList;
