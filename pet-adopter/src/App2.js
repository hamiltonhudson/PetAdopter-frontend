import React, { Component } from 'react';
import PetContainer from './components/PetContainer'

class App2 extends Component {

  state = {
    pets: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pets')
      .then(response => response.json())
      .then(data => {
        this.setState({
          pets: data
        })
      })
  }

  showPetDetails(petId) {
    console.log(petId)
  }
  render() {
    console.log(this.state.pets)
    return(
      <PetContainer pets={this.state.pets} handleClick={this.showPetDetails}/>
    )
  }
}

export default App2;
