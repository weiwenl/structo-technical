import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import queryString from 'querystring';

//import components
import UserInput from './UserInput/UserInput';
import DataOutput from './DataOutput/DataOutput';

class App extends Component {
    state = {
      searchQuery: "",
      repos: []
    }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);

    this.setState({
      searchQuery: Object.values(values)
    })
    let searchTerm = Object.values(values);
    let url = 'https://api.github.com/search/repositories?q=' + searchTerm;

    axios.get(url)
    .then(response => {
      this.setState({
        repos: response.data.items
      })
    }).catch(error => { console.log(error)});
  }

  inputChangeHandler = (event) => {
    this.setState({
      searchQuery: event.target.value
    });

    const url = new URL('localhost:3000');
    const params = new URLSearchParams(url.search);
    params.set('search', event.target.value)
    window.history.replaceState({}, '', `?${params}`);
  }

  submitQuery = (event) => {
    let searchTerm = event.target.value;
    let endpoint = 'https://api.github.com/search/repositories?q=' + searchTerm;

    let code = event.which;
      if(code === 13) {
        axios.get(endpoint)
          .then(response => {
            this.setState({
              repos: response.data.items
            })
          }).catch(error => { console.log(error)});
          event.preventDefault();
      }
  }


  render() {
    return (
      <div className="App">
        <h1>Search public Github repositories</h1>
        <UserInput changed={this.inputChangeHandler} value={this.state.searchQuery}
        submitKey={this.submitQuery}/>
        <DataOutput data={this.state.repos}/>
      </div>
    );
  }
}

export default App;
