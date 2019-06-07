import React from 'react';
import MyPets from './MyPets';
import MyAdoptedPets from './MyAdoptedPets'
import {Link} from 'react-router-dom';
import '../App.css'

class ProfileContainer extends React.Component {

  handleAdoptedStatus = (userId, foundPet) => {
    if (foundPet.adopted) {
      return (
        <div>
          <p className="adopted" style={{"fontSize" : "20px"}}>Adopted! </p>
        </div>
      )
    }
  }


  myPetCards = () => {
    return(
      <div>
        <br/>
        <Link to='/' className="allPetsLogoutLink" onClick={this.props.resetCheckbox}>Back To All Pets</Link>
        <span style={{"fontSize": "25px", "color": "#56587e", "fontWeight": "bolder"}}> | </span>
        <Link to='/' className="allPetsLogoutLink" onClick={this.props.logout}>Logout</Link>
        <h1 className="profileHeader">{this.props.currentUser.name}'s Pet List </h1>
        <br/>
        <div className="profilePetsWrapper">
          <div className="adoptedPets">
            <MyAdoptedPets myAdoptedPets={this.props.myAdoptedPets} pets={this.props.pets}/>
          </div>
          <div className="savedPets">
            <div className="ui page grid">
            {
                this.props.myPets.map(mypet => {
                  return <MyPets key={mypet.pet_id} {...mypet} pets={this.props.pets}
                    handleAdopt={this.props.handleAdopt} currentUser={this.props.currentUser}
                    adopted={this.props.adopted}
                    petObj={this.props.petObj}
                    handleAdoptedStatus={this.handleAdoptedStatus}
                    myPets={this.props.myPets}
                    myAdoptedPets={this.props.myAdoptedPets}
                    removeFromMyPets={this.props.removeFromMyPets}
                         />
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.myPetCards()}
      </div>
    )
  }
}

export default ProfileContainer;
