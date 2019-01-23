import React from 'react';
import Dashboard from './Dashboard';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { Route } from 'react-router-dom';
import ProfileContainer from "./components/ProfileContainer";

const apiMatchesAddress = 'http://localhost:3000/api/v1/matches'
const userAdoptAddress = 'http://localhost:3000/api/v1/users'

class App extends React.Component {
  state = {
    pets: [],
    clicked: false,
    currentUser: null,
    myPets:[],
    checkboxClick: false,
    animalCheck: "",
    adopted: false
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

  setCurrentUser = userObj => this.setState({currentUser:userObj},()=>{

  })

  // handleClick = () => {
  //   this.setState({
  //     loggedIn:!this.state.loggedIn
  //   })
  // }

  handleMyPets = (userId, petId) => {
    const postConfig = {
    	method:"POST",
    	headers:{"Content-type":"application/json", "Accept": "application/json"},
      body:JSON.stringify(
        {match:
          {pet_id:petId,
            user_id:userId}
          })
    }

    fetch(apiMatchesAddress, postConfig)
      .then(r => r.json())
      .then(petMatch => {
        let foundPet = this.state.myPets.find(pet => pet.pet_id === petId)
        console.log(foundPet)
        console.log(this.state.myPets)
        if (!foundPet) {
          this.setState({
            myPets: [...this.state.myPets, petMatch]
          })
        }
      })
  }

  handleSorted = (event) => {
    let sortedNameCopyPets = [...this.state.pets].sort((a,b) => (a.name.localeCompare(b.name)))
    let sortedIdCopyPets = [...this.state.pets].sort((a,b) => (a.id-b.id))
    if (event.target.value === "name"){
      this.setState({
      pets:sortedNameCopyPets
      })}
    else if (event.target.value === "all"){
      this.setState({
      pets:sortedIdCopyPets
      })
    }
  }

  handleFilter = (event) => {
    if(this.state.checkboxClick) {
      this.setState({
        checkboxClick:!this.state.checkboxClick,
        animalCheck:event.target.name
      })
    }
    else {
      this.setState({
        checkboxClick:!this.state.checkboxClick,
        animalCheck:event.target.name
      })
    }
  }

  handleAdopt = (userId, petId) => {
    //end goal is change the state of adopt, which will be toggled to true if you click adopt button
    //which will then render the button to say what we WANT IT TO SAY!!!!!!!!!!!!!!!!!!!!
    console.log(userId, petId)
    const postConfig = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
          pet_id: petId
      })
    }
    fetch(`${userAdoptAddress}/${userId}`, postConfig)
      .then(r => r.json())
      // debugger
      .then(data => {
        console.log(data)
      })
    }

  render() {
    return <>
      <Route path='/' exact render={()=> <Dashboard animalCheck={this.state.animalCheck} checkboxClick={this.state.checkboxClick} pets={this.state.pets} handleFilter={this.handleFilter} handleSorted={this.handleSorted} currentUser={this.state.currentUser} handleMyPets={this.handleMyPets} />}/>
      <Route path='/signin' component={Signin }/>
      <Route path='/signup' render={() => <Signup setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} />}
      />
      <Route path='/profile' render={() => <ProfileContainer pets={this.state.pets} myPets={this.state.myPets} currentUser={this.state.currentUser} handleAdopt={this.handleAdopt}/>}
      />
    </>

  }
}

export default App;
