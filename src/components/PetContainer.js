import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Animated } from 'react-animated-css';
import PetCard from './PetCard';

class PetContainer extends Component {

  handleAdoptedStatus = (userId, petId) => {
    let pet = this.props.pets.find(pet => pet.id === petId)
    if (pet.adopted === true)  {
      return (
        <div>
          <p className="adopted" style={{"fontSize" : "20px"}}>Adopted!</p>
        </div>
      )
    }
  }

  render() {
    let petList
    if (this.props.checkboxClick){
      petList = this.props.pets.map((pet) => {
        if (pet.animal === "Cat" && this.props.animalCheck==="Cats"){
          return <PetCard key={pet.id} pet={pet}
            currentUser={this.props.currentUser}
            pets={this.props.pets}
            myPets={this.props.myPets}
            myAdoptedPets={this.props.myAdoptedPets}
            handleAdoptedStatus={this.handleAdoptedStatus}
            handleMyPets={this.props.handleMyPets}
            removeFromMyPets={this.props.removeFromMyPets}
               />
        }
        else if (pet.animal === "Dog" && this.props.animalCheck==="Dogs"){
          return <PetCard key={pet.id} pet={pet}
            currentUser={this.props.currentUser}
            pets={this.props.pets}
            myPets={this.props.myPets}
            myAdoptedPets={this.props.myAdoptedPets}
            handleAdoptedStatus={this.handleAdoptedStatus}
            handleMyPets={this.props.handleMyPets}
            removeFromMyPets={this.props.removeFromMyPets}
               />
        }
        else if (pet.animal === "Rabbit" && this.props.animalCheck==="Rabbits"){
          return <PetCard key={pet.id} pet={pet}
            currentUser={this.props.currentUser}
            pets={this.props.pets}
            myPets={this.props.myPets}
            myAdoptedPets={this.props.myAdoptedPets}
            handleAdoptedStatus={this.handleAdoptedStatus}
            handleMyPets={this.props.handleMyPets}
            removeFromMyPets={this.props.removeFromMyPets}
               />
        }
      })
    } else {
      petList = this.props.pets.map((pet) => {
        return <PetCard key={pet.id} pet={pet}
          currentUser={this.props.currentUser}
          pets={this.props.pets}
          myPets={this.props.myPets}
          myAdoptedPets={this.props.myAdoptedPets}
          handleAdoptedStatus={this.handleAdoptedStatus}
          handleMyPets={this.props.handleMyPets}
          removeFromMyPets={this.props.removeFromMyPets}
          />
      })
    }
    return (
      <div className="ui contianer">
        <Link to="profile">
          <p className="headerThree">My Pets</p>
        </Link>
        <h1 className="headerOne">Welcome {this.props.currentUser.name}</h1>
        <Animated animationIn="tada" animationOut="flash" isVisible={true}>
          <h1 className="headerTwo"> ♡ Pets! ♡ </h1>
        </Animated>
        <div className="ui header">
          <select className="ui dropdown" onChange={this.props.handleSorted}>
            <option value="all">Sort </option>
            <option value="name"> Sort by Name </option>
          </select>
          <div>
            <input name= "Cats" className="ui checkbox" onChange={this.props.handleFilter} type="checkbox" />
            <label htmlFor="Cats">Cats Only!</label>
          </div>
          <div>
            <input name= "Dogs" className="ui checkbox" onChange={this.props.handleFilter} type="checkbox" />
            <label className="toggle" htmlFor="Dogs">Dogs Only!</label>
          </div>
          <div>
            <input name= "Rabbits" className="ui checkbox" onChange={this.props.handleFilter} type="checkbox" />
            <label className="toggle" htmlFor="Rabbits">Rabbits Only!</label>
          </div>
        </div>
        <br></br>
        <div className="ui page grid">
          {petList}
        </div>
      </div>
    )
  }
}

export default PetContainer;
