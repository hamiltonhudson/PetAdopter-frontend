import React from 'react';


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
    console.log(event.target.value)
    event.preventDefault()
    this.setState({
      name: '',
      email: ''
    })
    this.props.history.push('/', {userId: 1})
  }

  render() {
    console.log('signup', this.props)
    return(
      <div>
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
    )
  }
}

export default Signup;
