import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

//import components
import UserInput from './UserInput/UserInput';
import DataOutput from './DataOutput/DataOutput';

class App extends Component {
  state = {
    searchQuery: "",
    repos: []
  }

  inputChangeHandler = (event) => {
    let searchTerm = event.target.value;
    console.log("search query", event.target.value);
    this.setState({
      searchQuery: event.target.value
    });
    let url = 'https://api.github.com/search/repositories?q=' + searchTerm;
    axios.get(url)
    .then(response => {
      this.setState({
        repos: response.data.items
      });
    });
    event.preventDefault();
  }


  render() {
    return (
      <div className="App">
        <h1>Search public Github repositories</h1>
        <UserInput input={"Type something"} changed={this.inputChangeHandler}/>
        <DataOutput data={this.state.repos}/>
      </div>
    );
  }
}

export default App;
