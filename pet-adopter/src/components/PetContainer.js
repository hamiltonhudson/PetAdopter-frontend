import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PetCard from './PetCard'

class PetContainer extends Component {
  render() {
    return (
      <div>
        <PetCard />
      </div>
    )
  }
}

export default PetContainer;
