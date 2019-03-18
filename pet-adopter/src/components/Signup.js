import React from 'react';
import { Redirect } from "react-router-dom";
// import '../App.scss'

const apiUsersAddress = 'http://localhost:3000/api/v1/users'

class Signup extends React.Component {
  state = {
    name: '',
    email: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const postConfig = {
    	method:"POST",
    	headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        user: {
          name: this.state.name,
          email:this.state.email
        }
      })
    }
    fetch(apiUsersAddress,postConfig)
    .then(r=>r.json())
    .then(userObj => this.props.setCurrentUser(userObj))
  }

  render() {
    const signUpForm =
      <div className="loginDiv">
        <h1 className="signupHeader">Sign Up To Save Pets!</h1>
        <br/><br/>
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <input className="signupPlaceholders"
              onChange={this.handleChange}
              name="name"
              value={this.state.name}
              placeholder="name"
            />
            <input className="signupPlaceholders"
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
              placeholder="email"
            />
            <input onClick={this.props.handleClick}
              type="submit"
              className="signupButton"
            />
          </form>
        </div>
      </div>
    return this.props.currentUser ? <Redirect to="/" /> : signUpForm
  }
}

export default Signup;
