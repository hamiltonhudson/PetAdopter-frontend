import React from 'react';
import MyPets from './MyPets';

class ProfileContainer extends React.Component {
  render() {
    return(
      <div className="ui container">
        <h1>Profile Container</h1>
        <h2>User's Name:{this.props.currentUser.name} </h2>
        <MyPets />
      </div>
    )
  }
}

export default ProfileContainer;
