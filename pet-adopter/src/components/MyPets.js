import React from 'react';

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
          <div className="ui card image">
            <h1>{foundPet.name}</h1>
            <img className="ui inline image" src={(foundPet.photo)} />
            <button className= "ui button" onClick={this.handleClick}> View More Details! </button>
            <button onClick={()=>foundPet.handleMyPets(foundPet.currentUser.id, this.props.pet.id)} className= "ui button" >Adopt</button>
          </div>
        )
      } else {
        return(
          <div className="ui card content">
            <h1>{foundPet.name}</h1>
            <h3> Description:{foundPet.description}</h3>
            <h3> Sex:{foundPet.sex}</h3>
            <h3> Animal:{foundPet.animal}</h3>
            <h3> Age:{foundPet.age}</h3>
            <h3> Breed: {foundPet.breed}</h3>
            <button className= "ui button" onClick={this.handleClick}> Back </button>
            <button onClick={()=>this.props.handleMyPets(this.props.pet.id, this.props.currentUser.id)} className= "ui button" >Adopt</button>
          </div>
        )
      }
    }
}

export default MyPets
