import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="http://www.hslcnm.org/wp-content/uploads/2014/03/baby.jpg" className="App-logo" alt="pet" />
          <br></br><br></br>
          <p>
            Adopt A Pet!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            User Sign-In | Home Sign-In
          </a>
        </header>
      </div>
    );
  }
}

export default App;
