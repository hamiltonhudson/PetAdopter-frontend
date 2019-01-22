import React from 'react';
import {Redirect} from "react-router-dom"

const apiUsersAddress = 'http://localhost:3000/api/v1/users'


class Signup extends React.Component {
  state = {
    name: '',
    email: ''
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const postConfig = {
    	method:"POST",
    	headers:{"Content-type":"application/json"},
      body:JSON.stringify({user:{name:this.state.name,email:this.state.email}})
    }

    fetch(apiUsersAddress,postConfig).then(r=>r.json()).then(userObj=>this.props.setCurrentUser(userObj))
    // console.log(event.target.value)
    // event.preventDefault()
    // this.setState({
    //   name: '',
    //   email: ''
    // })
    // this.props.history.push('/', {userId: 1})
  }

  render() {
    console.log('signup', this.props.handleClick)

    const signUpForm = <div>
      <h1>Welcome to signup</h1>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange}
          name="name"
          value={this.state.name}
          placeholder="name"
        />
        <input onChange={this.handleChange}
          name="email"
          value={this.state.email}
          placeholder="email"
        />
        <input onClick={this.props.handleClick}
          type="submit"
          className="ui button"
        />
      </form>
    </div>
    console.log("In SignUp. Current user is :", this.props.currentUser)
    return this.props.currentUser ? <Redirect to="/" /> : signUpForm
  }
}

export default Signup;
