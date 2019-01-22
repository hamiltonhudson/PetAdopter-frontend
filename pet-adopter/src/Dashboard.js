import React, { Component } from 'react';
import PetContainer from './components/PetContainer'
import { Route } from 'react-router-dom';
import Welcome from './Welcome'

class Dashboard extends Component {


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
    return(
      <div className="App">
        {/* <Route path="/" component={(props) => {console.log(props); return <h1>text</h1>}}/> */}
        { this.props.currentUser ?
          <PetContainer pets={this.props.pets} handleSorted={this.props.handleSorted} handleMyPets={this.props.handleMyPets} currentUser={this.props.currentUser} />
        :
        <Welcome/>
        }
      </div>
    )
  }
}

export default Dashboard;
