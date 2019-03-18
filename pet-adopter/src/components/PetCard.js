import React, { Component } from 'react';
import AddOrRemovePet from './AddOrRemovePet'

class PetCard extends Component {

  state = {
    clicked:false
  }

  handleClick = () => {
    this.setState({
      clicked:!this.state.clicked
    })
  }


  show = () => {
    if(this.state.clicked){
      return(
        <div className="petContainer">
          <div className="ui card content">
            <div className="petTile">
              <h1 className="petTileh3">{this.props.pet.name}</h1>
              <h3> Description:{this.props.pet.description}</h3>
              <h3> Sex:{this.props.pet.sex}</h3>
              <h3> Animal:{this.props.pet.animal}</h3>
              <h3> Age:{this.props.pet.age}</h3>
              <h3> Breed: {this.props.pet.breed}</h3>
              <button className= "ui button" onClick={this.handleClick}> Back </button>
              {this.props.handleAdoptedStatus(this.props.currentUser.id, this.props.pet.id)}
              <AddOrRemovePet currentUser={this.props.currentUser} pet={this.props.pet} petId={this.props.pet.id} pets={this.props.pets} myPets={this.props.myPets} myAdoptedPets={this.props.myAdoptedPets} handleMyPets={this.props.handleMyPets} removeFromMyPets={this.props.removeFromMyPets}/>
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div className="petContainer">
          <div className="ui card image">
            <div className="petTile">
              <h1 className="petTileh3">{this.props.pet.name}</h1>
              <img className="ui inline image" src={(this.props.pet.photo)} />
              <button className="ui button" onClick={this.handleClick}> View More Details! </button>
              {this.props.handleAdoptedStatus(this.props.currentUser.id, this.props.pet.id)}
              <AddOrRemovePet currentUser={this.props.currentUser} pet={this.props.pet} petId={this.props.pet.id} pets={this.props.pets} myPets={this.props.myPets} myAdoptedPets={this.props.myAdoptedPets} handleMyPets={this.props.handleMyPets} removeFromMyPets={this.props.removeFromMyPets}/>
            </div>
          </div>
      </div>
      )
    }
  }

  render() {
    return (
        <div >
          {this.show()}
        </div>
      );
  }
}

export default PetCard;
