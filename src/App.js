import React, { Component } from 'react';
import './App.css';

//import components
import UserInput from './UserInput/UserInput';
import DataOutput from './DataOutput/DataOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Search public Github repositories</h1>
        <UserInput input={"Type something"}/>
        <DataOutput />
      </div>
    );
  }
}

export default App;
