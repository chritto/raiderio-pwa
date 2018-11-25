// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component<void> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  componentDidMount() {
    console.log("Mounting... hey buddy")
    fetch("https://raider.io/api/v1/characters/profile?region=us&realm=Ner'zhul&name=Sevv")
    .then(response => response.json())
    .then(console.log);
  }
}

export default App;
