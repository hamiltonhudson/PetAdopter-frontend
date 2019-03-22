import React, { Fragment } from 'react';

class MyPetsButton extends React.Component {

  handleAdoptOrRemove = (currentUser, petId) => {
    let pet = this.props.pets.find(pet => pet.id === this.props.petId)
    let myPetMatchIds = this.props.myPets.map(myPet => myPet.pet_id)
    let matchedPet = this.props.myPets.find(petMatch => petMatch.pet_id === this.props.petId)
    if (!pet.adopted && myPetMatchIds.includes(this.props.petId)) {
      return (
        <div>
          <button className="ui button" id="adopt-btn" onClick={()=>this.props.handleAdopt(this.props.currentUser.id, pet.id)}>Adopt</button>
          <button className="ui button" id="adopt-btn" onClick={()=>this.props.removeFromMyPets(matchedPet.id)}>Remove From My Pets</button>
        </div>)
    } else if (this.props.pet.owner_id === currentUser.id) {
      return (
      <div>
        <span className="adopted" style={{"fontSize" : "12px"}} img="𝔹𝕐 𝓤 ♥️"> By You ♡ </span>
      </div>
      )
    } else if (pet.adopted && !this.props.myAdoptedPets.includes(pet)) {
      return (
        <div>
          <button className="ui button" id="adopt-btn" onClick={()=>this.props.removeFromMyPets(matchedPet.id)}>Remove From My Pets</button>
        </div>
      )
    }
  }

  render() {
    return (
      <Fragment>
        {this.handleAdoptOrRemove(this.props.currentUser, this.props.pet.id)}
      </Fragment>
    )
    }
  }

export default MyPetsButton;
