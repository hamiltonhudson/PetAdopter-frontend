import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Link} from "react-router-dom";
import { Animated } from 'react-animated-css';
import PetCard from './PetCard';

class PetContainer extends Component {
  render() {
    return (
    <div className="ui contianer">
      <Link to="profile">
        <p className="headerThree">My profile</p>
      </Link>
      <h1 className="headerOne">Welcome {this.props.currentUser.name}</h1>
      <Animated animationIn="tada" animationOut="flash" isVisible={true}>
        <h1 className="headerTwo"> Pets </h1>
      </Animated>
      <div className="ui header">
        <select className="ui dropdown" onChange={this.props.handleSorted}>
          <option value="all">Show all </option>
          <option value="name"> Sort by Name </option>
        </select>
        <input className="ui checkbox" onChange={this.props.handleCat} type="checkbox" />
      </div>
      <br></br>
      <div className="ui page grid">
        {
          this.props.pets.map((pet) => {
            return <PetCard key={pet.id} pet={pet}
              handleMyPets={this.props.handleMyPets}
              currentUser={this.props.currentUser}/>
          })
        }
      </div>
    </div>
    )
  }
}

export default PetContainer;
