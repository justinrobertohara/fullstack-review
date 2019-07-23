import React from 'react';

const RepoList = props => (
  <div>
    <h4> Repo</h4>
    This is the {props.repo.name} name. There are the {props.repo.forks} forks.
  </div>
);

export default RepoList;
