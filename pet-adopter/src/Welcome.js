import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './App.scss';
import { Animated } from 'react-animated-css';

class Welcome extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src="http://www.hslcnm.org/wp-content/uploads/2014/03/baby.jpg"
          alt="pet" className="App-logo"/>
          <br/><br/><br/><br/>
          <Animated animationIn="pulse" animationOut="flash" isVisible={true}>
            <p className="App-header-two">Adopt A Pet!</p>
          </Animated>
          <br/><br/>
          <Link to='/signin' className='App-link'>
            Sign-In
          </Link>
          <br></br><br></br>
          <Link to='/signup' className='App-link'>
            Sign-Up
          </Link>
        </header>
      </div>
    );
  }
}

export default Welcome;
