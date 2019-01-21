import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PetCard from './PetCard'
import PetCardBack from './PetCardBack'

class PetContainer extends Component {
  render() {
    console.log(this.props.pets)
    return (
      <div>
        {
          this.props.pets.map((pet) => {
            return <PetCard pet={pet} handleClick={this.props.handleClick}/>
          })
        }
      </div>
    )
  }
}

export default PetContainer;
