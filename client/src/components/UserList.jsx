import React from 'react';
import User from './User.jsx';

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const users = this.props.users;
    const listUsers = users.map(user => {
      return (
        <div>
          <User user={user} />
        </div>
      );
    });

    return (
      <div>
        <h4>We Have {this.props.users.length} Users in our Mongo DB</h4>
        <ul>{listUsers}</ul>
      </div>
    );
  }
}

// export default UserList;
