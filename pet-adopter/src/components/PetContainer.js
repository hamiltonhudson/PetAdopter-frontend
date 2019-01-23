import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Link} from "react-router-dom";
import { Animated } from 'react-animated-css';
import PetCard from './PetCard';

class PetContainer extends Component {
  render() {
    let petList
    if (this.props.checkboxClick){
    petList = this.props.pets.map((pet) => {
        if (pet.animal === "Cat" && this.props.animalCheck==="Cats"){
          return <PetCard key={pet.id} pet={pet}
            handleMyPets={this.props.handleMyPets}
            currentUser={this.props.currentUser}
            />
        }
        else if (pet.animal === "Dog" && this.props.animalCheck==="Dogs"){
          return <PetCard key={pet.id} pet={pet}
            handleMyPets={this.props.handleMyPets}
            currentUser={this.props.currentUser}
            />
          }
          else if (pet.animal === "Rabbit" && this.props.animalCheck==="Rabbits"){
            return <PetCard key={pet.id} pet={pet}
              handleMyPets={this.props.handleMyPets}
              currentUser={this.props.currentUser}
              />
            }
      })
    } else {
      petList = this.props.pets.map((pet) => {
        return <PetCard key={pet.id} pet={pet}
          handleMyPets={this.props.handleMyPets}
          currentUser={this.props.currentUser}
          />
      })

    }
    return (
    <div>
      <Link to="profile">
        <p className="headerThree">My profile</p>
      </Link>
      <h1 className="headerOne">Welcome {this.props.currentUser.name}</h1>
      <Animated animationIn="tada" animationOut="flash" isVisible={true}>
        <h1 className="headerTwo"> Pets </h1>
      </Animated>
      <div className="ui header">
        <select className="ui dropdown" onChange={this.props.handleSorted}>
          <option value="all">Sort </option>
          <option value="name"> Sort by Name </option>
        </select>
        <div><input name= "Cats" className="ui checkbox" onChange={this.props.handleFilter} type="checkbox" />
        <label for="Cats">Cats Only!</label>
        </div>
        <div><input name= "Dogs" className="ui checkbox" onChange={this.props.handleFilter} type="checkbox" />
        <label for="Dogs">Dogs Only!</label>
        </div>
        <div><input name= "Rabbits" className="ui checkbox" onChange={this.props.handleFilter} type="checkbox" />
        <label for="Rabbits">Rabbits Only!</label>
        </div>
      </div>
      <br></br>
      <div className="ui page grid">
        {/*
          this.props.pets.map((pet) => {
            return <PetCard key={pet.id} pet={pet}
              handleMyPets={this.props.handleMyPets}
              currentUser={this.props.currentUser}
              />
          })
        */}
        {petList}
      </div>
    </div>
    )
  }
}

export default PetContainer;
