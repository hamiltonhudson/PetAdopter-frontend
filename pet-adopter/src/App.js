import React from "react"
import Dashboard from './Dashboard';
import Signin from './components/Signin'
import Signup from './components/Signup'
import { Route } from 'react-router-dom';
import ProfileContainer from "./components/ProfileContainer"

class App extends React.Component {
  state = {
    pets:[],
    clicked:false,
    currentUser: null
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

  handleClick = () => {
    this.setState({
      loggedIn:!this.state.loggedIn
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

  render() {
    console.log("In app. Props are :", this.props)
    return <>
      <Route path='/' exact render={()=> <Dashboard pets={this.state.pets} handleSorted={this.handleSorted} currentUser={this.state.currentUser} />}/>
      <Route path='/signin' component={Signin }/>
      <Route path='/signup' render={() => <Signup setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} />}
      />
      <Route path='/profile' render={() => <ProfileContainer currentUser={this.state.currentUser} />}
      />
    </>

  }
}

export default App
