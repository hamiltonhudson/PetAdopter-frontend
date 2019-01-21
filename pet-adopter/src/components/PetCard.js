import React, { Component } from 'react';

class PetCard extends Component {

  // const { pet } = props;
  // let botType;

  state = {
    clicked:false
  }

  handleClick = () =>{
      this.setState({
        clicked: !this.state.clicked
      })
    }

    show = () => {
    if(this.state.clicked){
      return(
        <div onClick={this.handleClick}>
        <h1>{this.props.pet.name}</h1>
        <h3> Description:{this.props.pet.description}</h3>
        <h3> Sex:{this.props.pet.sex}</h3>
        <h3> Animal:{this.props.pet.animal}</h3>
        <h3> Age:{this.props.age}</h3>
        <h3> Breed: {this.props.pet.breed}</h3>
        </div>
      )
    } else {
      return(
        <div onClick={this.handleClick}>
        <h1>{this.props.pet.name}</h1>
        <img src={(this.props.pet.photo)} />
        </div>
      )
    }
  }

  render() {
    console.log(this.props.pet)
    return (
        <div>
          {this.show()}
        </div>
      );
  }
}

export default PetCard;
