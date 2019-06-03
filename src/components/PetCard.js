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
            <div className="petTile back">
              <h1 className="petTileh3">{this.props.pet.name}</h1>
              <div className="desc"> Description:{this.props.pet.description}</div>
              <h5 id="details"> Sex:{this.props.pet.sex}</h5>
              <h5 id="details"> Animal:{this.props.pet.animal}</h5>
              <h5 id="details"> Age:{this.props.pet.age}</h5>
              <h5 id="details"> Breed: {this.props.pet.breed}</h5>
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
            <div className="petTile front">
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
