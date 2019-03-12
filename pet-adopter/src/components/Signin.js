import React from 'react';
import { Redirect } from 'react-router-dom';
import ProfileContainer from './ProfileContainer';

const apiUsersAddress = 'http://localhost:3000/api/v1/users'

class Signin extends React.Component {
  state = {
    name: '',
    email: '',
    myPets: this.props.myPets
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(event.target.value)
    console.log("this.state", this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(apiUsersAddress)
    .then(response => response.json())
    .then(userData => {
      console.log(userData)
      const userObj = userData.find(user => user.name.toLowerCase() === this.state.name.toLowerCase() && user.email === this.state.email)
      // const userObj = userData.find(user => user.email === this.state.email)
      console.log(userObj)
      this.props.setCurrentUser(userObj)
      this.setState({
        myPets: this.props.userObj.pets
      })
    })
    // this.setState({
    //   name: '',
    //   email: ''
    // })
  }
  render() {
    const signInForm =
      <div className="signinDiv">
        <h1 className="signinHeader">Sign In To Save Pets!</h1>
        <br/><br/>
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <input className="signinPlaceholders"
              onChange={this.handleChange}
              name="name"
              value={this.state.name}
              placeholder="name"
            />
            <input className="signinPlaceholders"
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
              placeholder="email"
            />
            <input
              type="submit"
              className="signinButton"
            />
          </form>
        </div>
      </div>
    return this.props.currentUser ? <Redirect to="/" myPets={this.state.myPets} /> : signInForm;
  }
}

export default Signin;
