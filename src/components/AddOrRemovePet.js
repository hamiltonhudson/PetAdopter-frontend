import React, { Fragment } from 'react';

class AddOrRemovePet extends React.Component {

  handleAddOrRemove = (userId, petId) => {
    let pet = this.props.pets.find(pet => pet.id === this.props.petId)
    let myPetMatchIds = this.props.myPets.map(myPet => myPet.pet_id)
    let matchedPet = this.props.myPets.find(petMatch => petMatch.pet_id === this.props.petId)
    if (this.props.pet.owner_id !== userId && myPetMatchIds.includes(petId)) {
      return <button className="ui button" id="adopt-btn" onClick={()=>this.props.removeFromMyPets(matchedPet.id)}>Remove From My Pets</button>
    }
    else if (!pet.adopted && !myPetMatchIds.includes(petId)) {
      return <button className="ui button" onClick={()=>this.props.handleMyPets(userId, petId)}>Add To My Pets</button>
    }
    else if (this.props.pet.owner_id === userId && myPetMatchIds.includes(petId)) {
      return <span className="adopted" style={{"fontSize" : "12px"}} img="𝔹𝕐 𝓤 ♥️"> By You ♡ </span>
    }
    else if (this.props.pet.owner_id !== userId && !myPetMatchIds.includes(petId)) {
      return <span className="adopted" style={{"fontWeight" : "bold"}} img="♥️">♡</span>
    }
  }

  render() {
    return (
      <Fragment>
        {this.handleAddOrRemove(this.props.currentUser.id, this.props.pet.id)}
      </Fragment>
    )
  }
}

export default AddOrRemovePet
