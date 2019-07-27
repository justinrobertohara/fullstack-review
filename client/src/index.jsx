import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
    this.get25Repos = this.get25Repos.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.get25Repos();
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

  search(term) {
    axios
      .post('/repos', {
        data: term
      })
      .then(response => {
        //promisify***
        console.log(response);
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
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
