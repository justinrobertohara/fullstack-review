import React from 'react';

//added in links
const Repo = props => (
  <div>
    <h4> {props.repo.login} Github's profile</h4>
    There are the {props.repo.forks} forks. Link for repo->
    <a href={props.repo.url}>{props.repo.nameOfRepo}</a>
  </div>
);

export default Repo;
