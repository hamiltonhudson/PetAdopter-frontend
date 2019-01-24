import React from 'react';
import ProfileContainer from './ProfileContainer';

class Signin extends React.Component {
  render() {
    const signInForm =
      <div className="signinDiv">
        <h1 className="signinHeader">Sign In To Save Pets!</h1>
        <br/><br/>
        <div className="login">
          <form>
            <input className="signinPlaceholders"
              name="name"
              placeholder="name"
            />
            <input className="signinPlaceholders"
              name="email"
              placeholder="email"
            />
            <input
              type="submit"
              className="signinButton"
            />
          </form>
        </div>
      </div>
    return signInForm;
  }
}

export default Signin;
