import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Animated } from 'react-animated-css';
import './App.css';
import './App.scss';
import doggo from './images/doggo.jpg';
import kitter from './images/kitter.jpg';
import catdog from './images/catdog.jpg';

class Welcome extends Component {

  handleClick = () => {
    console.log("figure out delay and animation")
  }

  render() {
    return (
      <div className="App">
        <header className="App-image">
          <img src={doggo}
            alt="doggo" className="App-logo"
          />
          {/* <img src={kitter}
            alt="kitter" className="App-logo"
          /> */}
          {/* <img src={catdog}
            alt="cat-and-dog" className="App-logo"
          /> */}
          <br/><br/><br/><br/>
          <Animated animationIn="pulse" animationOut="flash" isVisible={true}>
            <p className="App-header">Adopt A Pet!</p>
          </Animated>
          <br/><br/>
          <Link to='/signin' onClick={this.handleClick} className='App-link'>
            SignIn
          </Link>
          <br></br><br></br>
          <Link to='/signup' onClick={this.handleClick} className='App-link'>
            SignUp
          </Link>
        </header>
      </div>
    );
  }
}

export default Welcome;
