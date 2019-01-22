import React, { Component } from 'react';

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
        <div className="ui card content">
          <h1>{this.props.pet.name}</h1>
          <h3> Description:{this.props.pet.description}</h3>
          <h3> Sex:{this.props.pet.sex}</h3>
          <h3> Animal:{this.props.pet.animal}</h3>
          <h3> Age:{this.props.pet.age}</h3>
          <h3> Breed: {this.props.pet.breed}</h3>
          <button className= "ui button" onClick={this.handleClick}> Back </button>
          <button onClick={()=>this.props.handleMyPets(this.props.pet.id, this.props.currentUser.id)} className= "ui button" >Add To My Pets</button>
        </div>
      )
    } else {
      return(
        <div className="ui card image">
          <h1>{this.props.pet.name}</h1>
          <img className="ui inline image" src={(this.props.pet.photo)} />
          <button className= "ui button" onClick={this.handleClick}> View More Details! </button>
          <button onClick={()=>this.props.handleMyPets(this.props.currentUser.id, this.props.pet.id)} className= "ui button" >Add To My Pets</button>
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
