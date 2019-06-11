import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Animated } from 'react-animated-css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';
import './App.scss';

const api50PetsAddress = 'http://localhost:3000/api/v1/sample50pets'

class Welcome extends Component {
    state = {
      firstSample: '',
      secondSample: '',
      thirdSample: '',
      fourthSample: '',
      fifthSample: ''
    }

  componentDidMount = () => {
    fetch(api50PetsAddress, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    })
    .then(response => response.json())
    .then(fiftyPets => {
      this.setState({
        firstSample: (fiftyPets[Math.floor (Math.random() * fiftyPets.length)]),
        secondSample: (fiftyPets[Math.floor (Math.random() * fiftyPets.length)]),
        thirdSample: (fiftyPets[Math.floor (Math.random() * fiftyPets.length)]),
        fourthSample: (fiftyPets[Math.floor (Math.random() * fiftyPets.length)]),
        fifthSample: (fiftyPets[Math.floor (Math.random() * fiftyPets.length)])
      })
    })
  }

  petsCarousel = () => {
    return (
        <Carousel className="carousel" showThumbs={false} showStatus={false} showIndicators={false} useKeyboardArrows={true} infiniteLoop={true} autoPlay={true} stopOnHover={true} dynamicHeight={true}>
          <img src={(this.state.firstSample)} alt={'Pet #1'} className="carousel-image"/>
          <img src={(this.state.secondSample)} alt={'Pet #2'} className="carousel-image"/>
          <img src={(this.state.thirdSample)} alt={'Pet #3'} className="carousel-image"/>
          <img src={(this.state.fourthSample)} alt={'Pet #4'} className="carousel-image"/>
          <img src={(this.state.fifthSample)} alt={'Pet #5'} className="carousel-image"/>
        </Carousel>
    )
  }

  render() {
    return (
      <div className="App">
        {this.petsCarousel()}
        <br/><br/>
        <header className="App-header">
          <Animated animationIn="pulse" animationOut="flash" isVisible={true}>
            <p className="App-title">Adopt A Pet!</p>
          </Animated>
          <br/>
          <span>
            <Link to='/signin' onClick={this.handleClick} className='App-link'> SignIn </Link>
          </span>
          <br/>
          <span>
            <Link to='/signup' onClick={this.handleClick} className='App-link'> SignUp </Link>
          </span>
        </header>
      </div>
    );
  }
}

export default Welcome;
