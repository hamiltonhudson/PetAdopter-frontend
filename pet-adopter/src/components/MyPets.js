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
    console.log(this.props.adopted)
    let foundPet = this.props.pets.find(pet => this.props.pet_id === pet.id)

      if(!this.state.clicked){
        return(
          <div className="petContainer">
            <div className="ui card content">
              <div className="petTile">
                <h1 className="petTileh3">{foundPet.name}</h1>
                <img className="ui inline image" src={(foundPet.photo)} />
                <button className= "ui button" onClick={this.handleClick}> View More Details! </button>
                <button onClick={() => this.props.handleAdopt(this.props.currentUser.id, foundPet.id)}
                className= "ui button">{this.props.adopted && foundPet.id === this.props.petObj.pet_id ? "Adopted!" : "Adopt"}</button>
              </div>
            </div>
            </div>
            )
          } else {
            return(
              <div className="petContainer">
                <div className="ui card image">
                  <div className="petTile">
                    <h1 className="petTileh3">{foundPet.name}</h1>
                    <h3> Description:{foundPet.description}</h3>
                    <h3> Sex:{foundPet.sex}</h3>
                    <h3> Animal:{foundPet.animal}</h3>
                    <h3> Age:{foundPet.age}</h3>
                    <h3> Breed: {foundPet.breed}</h3>
                    <button className= "ui button" onClick={this.handleClick}> Back </button>
                    <button onClick={() => this.props.handleAdopt(this.props.currentUser.id, foundPet.id)}
                    className= "ui button">{this.props.adopted && foundPet.id === this.props.petObj.pet_id ? "Adopted!" : "Adopt"}</button>
                  </div>
                  </div>
                </div>
        )
      }
    }
}

export default MyPets;
