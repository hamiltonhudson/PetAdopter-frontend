import React from 'react';
import Dashboard from './Dashboard';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { Route } from 'react-router-dom';
import ProfileContainer from "./components/ProfileContainer";

const apiMatchesAddress = 'http://localhost:3000/api/v1/matches'
const apiUsersAddress = 'http://localhost:3000/api/v1/users'
const apiPetsAddress = 'http://localhost:3000/api/v1/pets'

class App extends React.Component {
  state = {
    pets: [],
    clicked: false,
    currentUser: null,
    myPets:[],
    checkboxClick: false,
    animalCheck: "",
    adopted: false,
    petObj:"",
    myAdoptedPets: []
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

  setMyPets = (currentUserPets, usersAdoptedPets) => this.setState({myPets:currentUserPets, myAdoptedPets:usersAdoptedPets},()=>{
  })

  handleSorted = (event) => {
    let sortedNameCopyPets = [...this.state.pets].sort((a,b) => (a.name.localeCompare(b.name)))
    let sortedIdCopyPets = [...this.state.pets].sort((a,b) => (a.id-b.id))
    if (event.target.value === "name"){
      this.setState({
        pets:sortedNameCopyPets
      })
    }
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

  resetCheckbox = () => {
    this.setState({
      checkboxClick: false
      // checkboxClick:!this.state.checkboxClick
    })
  }

  handleMyPets = (userId, petId) => {
    const postConfig = {
    	method:"POST",
    	headers:{"Content-type":"application/json", "Accept": "application/json"},
      body:JSON.stringify(
        {match:
          {user_id:userId,
            pet_id:petId}
        }
      )
    }
    fetch(apiMatchesAddress, postConfig)
    .then(r => r.json())
    .then(petMatch => {
      let foundPet = this.state.myPets.find(pet => pet.pet_id === petId)
      let pet = this.state.pets.find(pet => pet.id === petId)
      window.alert(`${pet.name} has been added to your pets  😊❣️`)
      if (!foundPet) {
        this.setState({
          myPets: [...this.state.myPets, petMatch]
        })
      }
    })
  }

  handleAdopt = (userId, petId) => {
    this.setState({
      adopted:!this.state.adopted
    })
    const postConfig = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        adopted: true,
        owner_id: userId
      })
    }
    fetch(`${apiPetsAddress}/${petId}`, postConfig)
    .then(r => r.json())
    // debugger
    .then(petData => {
      let pets = petData
      // let adoptedPet = this.state.myPets.find(pet => pet.pet_id === data.pet_id)
      let adoptedPet = pets.find(pet => pet.id === petId)
      let index = this.state.myPets.indexOf(adoptedPet)
      let usersAdoptedPets = pets.filter(pet => pet.owner_id === this.state.currentUser.id)
      this.setState({
        pets: pets,
        petObj: adoptedPet,
        myAdoptedPets: usersAdoptedPets
      })
    })
  }

  removeFromMyPets = (matchId) => {
    fetch(`http://localhost:3000/api/v1/matches/${matchId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        id: `${matchId}`
      })
    })
    .then(r => r.json())
    .then(response => {
      this.setState({
      myPets: response
      })
    })
  }

  render() {
    return <>
      <Route path='/' exact render={()=> <Dashboard animalCheck={this.state.animalCheck} checkboxClick={this.state.checkboxClick} pets={this.state.pets} handleFilter={this.handleFilter} handleSorted={this.handleSorted}
        currentUser={this.state.currentUser} handleMyPets={this.handleMyPets} myPets={this.state.myPets} myAdoptedPets={this.state.myAdoptedPets} removeFromMyPets={this.removeFromMyPets} />}
      />
      <Route path='/signin' render={() => <Signin setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} setMyPets={this.setMyPets} myPets={this.state.myPets}/>}
      />
      <Route path='/signup' render={() => <Signup setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} />}
      />
      <Route path='/profile' render={() => <ProfileContainer petObj={this.state.petObj} pets={this.state.pets} myPets={this.state.myPets} currentUser={this.state.currentUser} adopted={this.state.adopted} handleAdopt={this.handleAdopt}
        myAdoptedPets={this.state.myAdoptedPets} resetCheckbox={this.resetCheckbox} removeFromMyPets={this.removeFromMyPets}/>}
      />
    </>
  }

}
export default App;
