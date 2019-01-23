import React from 'react';
import MyPets from './MyPets';
import {Link} from 'react-router-dom';

class ProfileContainer extends React.Component {
  render() {
    return(
      <div className="ui container">
        <h1 className="ui header">Profile Container</h1>
        <h2>{this.props.currentUser.name} </h2>
        <h1>My Pets List</h1>
        <div className="ui page grid">
          {
            this.props.myPets.map(mypet => {
              return <MyPets key={mypet.pet_id} {...mypet} pets={this.props.pets}/> })
          }
          <Link to='/'>Back to Pet Index</Link>
        </div>
      </div>
    )
  }
}

export default ProfileContainer;
