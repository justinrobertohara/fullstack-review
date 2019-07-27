import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';
import UserList from './components/UserList.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      users: []
    };
    this.get25Repos = this.get25Repos.bind(this);
    this.search = this.search.bind(this);
    this.getTotalUsers = this.getTotalUsers.bind(this);
  }

  componentDidMount() {
    this.get25Repos();
    this.getTotalUsers();
  }

  get25Repos() {
    axios
      .get('/repos')
      .then(response => {
        this.setState({
          repos: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getTotalUsers() {
    axios
      .get('/users')
      .then(response => {
        this.setState({
          users: response.data
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  search(term) {
    axios
      .post('/repos', {
        data: term
      })
      .then(response => {
        //promisify***

        alert(
          `${response.data.user} has ${
            response.data.number
          } new repos imported and ${response.data.number} repos updated`
        );
        window.setTimeout(() => {
          this.get25Repos();
        }, 1500);
      })
      .catch(function(error) {
        console.log(error);
      });

    // initial ajax call
    // $.ajax({
    //   type: 'POST',
    //   url: '/repos',
    //   contentType: 'application/json',
    //   data: JSON.stringify(data),
    //   success: function(err, res) {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log(res);
    //     }
    //   }
    // });
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>

        <RepoList repos={this.state.repos} />
        <Search onSearch={this.search} />
        <UserList users={this.state.users} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
