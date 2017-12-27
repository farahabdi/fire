import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/index.scss';

class App extends Component {
  render() {
    return (
      <div className="grommet">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-titlsse">11eessWelsscome tssso Ressacsst</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
