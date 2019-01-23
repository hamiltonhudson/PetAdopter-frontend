import React from 'react';
import Dashboard from './Dashboard';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { Route } from 'react-router-dom';
import ProfileContainer from "./components/ProfileContainer";

const apiMatchesAddress = 'http://localhost:3000/api/v1/matches'

class App extends React.Component {
  state = {
    pets:[],
    clicked:false,
    currentUser: null,
    myPets:[]

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

    fetch(apiMatchesAddress,postConfig)
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

  render() {
    return <>
      <Route path='/' exact render={()=> <Dashboard pets={this.state.pets} handleSorted={this.handleSorted} currentUser={this.state.currentUser} handleMyPets={this.handleMyPets} />}/>
      <Route path='/signin' component={Signin }/>
      <Route path='/signup' render={() => <Signup setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} />}
      />
      <Route path='/profile' render={() => <ProfileContainer pets={this.state.pets} myPets={this.state.myPets} currentUser={this.state.currentUser} />}
      />
    </>

  }
}

export default App;
