import React, { Component } from 'react';
import PetContainer from './components/PetContainer'

class App2 extends Component {

  state = {
    pets:[],
    clicked:false,
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/pets')
      .then(response => response.json())
      .then(data => {
        this.setState({
          pets: data
        })
      })
  }

  handleSorted = (event) => {
    let sortedNameCopyPets = [...this.state.pets].sort((a,b) => (a.name.localeCompare(b.name)))
    if (event.target.value === "name"){
      this.setState({
      pets:sortedNameCopyPets
      })}
    else if (event.target.value === "all"){
      this.setState({
      pets:this.state.pets
      })
    }
  }

  // handleCat=(event) => {
  //  if (this.state.clicked === false){
  //   const allPets = [...this.state.pets]
  //   let catsArray = allPets.filter(pet => pet.animal === "Cat")
  //   return this.setState({
  //     pets:catsArray,
  //     clicked:!this.state.clicked
  //   })
  // }

//   else {
//     this.setState({
//       clicked:!this.state.clicked,
//       pets:this.state.pets
//     })
//   }
// }

//^ need to fix this function. Filters just cats, but then mutates pets state to always be just cats


  render() {
    return(
      <div className="App">
      <PetContainer pets={this.state.pets} handleClick={this.handleClick} handleSorted={this.handleSorted} handleCat={this.handleCat}/>
      </div>
    )
  }
}

export default App2;
