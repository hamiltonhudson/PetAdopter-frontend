import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="http://www.hslcnm.org/wp-content/uploads/2014/03/baby.jpg" className="App-logo" alt="pet" />
          <br></br><br></br>
          <p>
            Adopt A Pet!
          </p>
          <Link to='/signin' handleClick={this.props.handleClick} >
            Sign-In
          </Link>
          <Link to='/signup' >
            Sign-Up
          </Link>
            </header>
      </div>
    );
  }
}

export default Welcome;
