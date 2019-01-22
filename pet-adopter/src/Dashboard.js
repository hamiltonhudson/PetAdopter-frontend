import React, { Component } from 'react';
import PetContainer from './components/PetContainer'
import { Route } from 'react-router-dom';
import Welcome from './Welcome'

class Dashboard extends Component {

  // state = {
  //   pets:[],
  //   clicked:false,
  //   loggedIn: false
  // }

  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/pets')
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         pets: data
  //       })
  //     })
  // }

  // handleSorted = (event) => {
  //   let sortedNameCopyPets = [...this.state.pets].sort((a,b) => (a.name.localeCompare(b.name)))
  //   if (event.target.value === "name"){
  //     this.setState({
  //     pets:sortedNameCopyPets
  //     })}
  //   else if (event.target.value === "all"){
  //     this.setState({
  //     pets:this.state.pets
  //     })
  //   }
  // }

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
// handleClick = () => {
//   this.setState({
//     loggedIn:!this.state.loggedIn
//   })
// }

  render() {
    console.log('dashboard', this.props)
    return(
      <div className="App">
        {/* <Route path="/" component={(props) => {console.log(props); return <h1>text</h1>}}/> */}
        { this.props.currentUser ?
          <PetContainer pets={this.props.pets} handleSorted={this.props.handleSorted} currentUser={this.props.currentUser} />
        :
        <Welcome/>
        }
      </div>
    )
  }
}

export default Dashboard;
