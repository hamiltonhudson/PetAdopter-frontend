import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PetCard from './PetCard'
import {Link} from "react-router-dom"

class PetContainer extends Component {
  render() {
    return (
    <div>
      <Link to="profile">My profile</Link>
      <h1> Welcome {this.props.currentUser.name} </h1>
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
            return <PetCard key={pet.id} pet={pet}
              handleClick={this.props.handleClick} />
            })
          }
      </div>
      </div>
    )
  }
}

export default PetContainer;
