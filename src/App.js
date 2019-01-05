import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

//import components
import UserInput from './UserInput/UserInput';
import DataOutput from './DataOutput/DataOutput';

class App extends Component {
  state = {
    searchQuery: "",
    repositories: []
  }

  inputChangeHandler = (event) => {
    let searchTerm = event.target.value;
    console.log("search query", event.target.value);
    let url = 'https://api.github.com/search/repositories?q=' + searchTerm;
    axios.get(url)
    .then(response => {
      console.log(response)
    });
    event.preventDefault();
  }


  render() {
    return (
      <div className="App">
        <h1>Search public Github repositories</h1>
        <UserInput input={"Type something"} changed={this.inputChangeHandler}/>
        <DataOutput />
      </div>
    );
  }
}

export default App;
