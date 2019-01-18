import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    usemi:'',
  }

updateUsemi = (usemi) => this.setState(
  {
    usemi:usemi,
  }
);
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Exercise 1 - Controlled Components</h1>
        </header>
        <div className="container">
          <input type="text" placeholder="Say Something" onChange = {(event) => this.updateUsemi(event.target.value)}/>
          <p className="echo">Echo:</p>
          <p>{this.state.usemi}</p>
        </div>
      </div>
    );
  }
}

export default App;
