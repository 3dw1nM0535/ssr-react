import React, { Component } from 'react';
import logo from './check-mark-1292787_960_720.png';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React on the server</h2>
        </div>
        <p className="App-intro">Server side rendering bets on speed!</p>
      </div>
    );
  }
}

export default App;
