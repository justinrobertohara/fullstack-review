import React from 'react';


const Repo = props => (
  <div>
    <h4> {props.repo.login} Github's profile</h4>
    <a href={props.repo.url}>{props.repo.nameOfRepo}</a> has {props.repo.forks}{' '}
    forks
  </div>
);

export default Repo;
