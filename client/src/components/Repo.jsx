import React from 'react';

const RepoList = props => (
  <div>
    <h4> {props.repo.name} Github's profile</h4>
    There are the {props.repo.forks} forks.
  </div>
);

export default RepoList;
