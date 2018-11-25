// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterPreview from './CharacterPreview.js';

class App extends Component<void> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <CharacterPreview name="Sev" realm="Ner'zhul" region="us" />
        </header>
      </div>
    );
  }
}

export default App;
