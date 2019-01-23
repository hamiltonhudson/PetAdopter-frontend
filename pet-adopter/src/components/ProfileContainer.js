import React from 'react';
import MyPets from './MyPets';
import {Link} from 'react-router-dom';

class ProfileContainer extends React.Component {
  render() {
    return(
      <div className="ui container">
        <Link to='/' className="headerThree">Back to Pet Index</Link>
        <h2 className="headerFour">{this.props.currentUser.name}'s Pet List </h2>
        {/* <h1>My Pets List</h1> */}
        <br/><br/><br/>
        <div className="ui container">
          <div className="ui page grid">
            {
              this.props.myPets.map(mypet => {
                return <MyPets key={mypet.pet_id} {...mypet} pets={this.props.pets}
                  handleAdopt={this.props.handleAdopt} currentUser={this.props.currentUser}/> })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileContainer;
