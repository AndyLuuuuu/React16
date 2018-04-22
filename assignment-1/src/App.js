import React, { Component } from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput.js";
import UserOutput from "./UserOutput/UserOutput.js";

class App extends Component {
  state = {
    username: "Andy"
  }

  switchUsernameHandler = (event) => {
    this.setState({username: event.target.value})
  }
  render() {
    return (
      <div className="App">
        <UserInput changed={this.switchUsernameHandler} currentName={this.state.username}></UserInput>
        <UserOutput userName={this.state.username}></UserOutput>
        <UserOutput userName={this.state.username}></UserOutput>
        <UserOutput userName="John"></UserOutput>
      </div>
    );
  }
}

export default App;
