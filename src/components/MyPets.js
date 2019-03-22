import React from 'react';
import MyPetsButton from './MyPetsButton';

class MyPets extends React.Component {

  state = {
    clicked:false
  }

  handleClick = () => {
    this.setState({
      clicked:!this.state.clicked
    })
  }

  render() {
    let foundPet = this.props.pets.find(pet => this.props.pet_id === pet.id)
    if(!this.state.clicked){
      return(
        <div className="petContainer">
          <div className="ui card content">
            <div className="myPetTile">
              <h1 className="myPetTileh3">{foundPet.name}</h1>
              <img className="ui inline image" src={(foundPet.photo)} />
              <button className= "ui button" onClick={this.handleClick}> View More Details! </button>
              <div>
                {this.props.handleAdoptedStatus(this.props.currentUser.id, foundPet)}
              </div>
              <MyPetsButton petObj={this.props.petObj} pet={foundPet} currentUser={this.props.currentUser} petObjId={this.props.petObj.id} petId={foundPet.id} pets={this.props.pets} myPets={this.props.myPets} myAdoptedPets={this.props.myAdoptedPets} handleAdopt={this.props.handleAdopt} removeFromMyPets={this.props.removeFromMyPets} />
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div className="petContainer">
          <div className="ui card image">
            <div className="myPetTile">
              <h1 className="myPetTileh3">{foundPet.name}</h1>
              <h3> Description:{foundPet.description}</h3>
              <h3> Sex:{foundPet.sex}</h3>
              <h3> Animal:{foundPet.animal}</h3>
              <h3> Age:{foundPet.age}</h3>
              <h3> Breed: {foundPet.breed}</h3>
              <button className= "ui button" onClick={this.handleClick}> Back </button>
              <div>
                {this.props.handleAdoptedStatus(this.props.currentUser.id, foundPet)}
              </div>
              <MyPetsButton pet={foundPet} currentUser={this.props.currentUser} petObjId={this.props.petObj.id} petId={foundPet.id} pets={this.props.pets} myPets={this.props.myPets} myAdoptedPets={this.props.myAdoptedPets} handleAdopt={this.props.handleMyPets} removeFromMyPets={this.props.removeFromMyPets} />
            </div>
          </div>
        </div>
      )
    }
  }

}
export default MyPets;
