import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PetCard from './PetCard'

class PetContainer extends Component {
  render() {
    return (
    <div>
      <h1> Pets! </h1>
      <div className="ui header">
          <select className="ui dropdown" onChange={this.props.handleSorted}>
            <option value="all">Show all </option>
            <option value="name"> Sort by Name </option>
          </select>
          <input onChange={this.props.handleCat} type="checkbox" />
      </div>
        <div className="ui page grid">
          {
            this.props.pets.map((pet) => {
              return <PetCard pet={pet}
              handleClick={this.props.handleClick} />
            })
          }
      </div>
      </div>
    )
  }
}

export default PetContainer;
