import React from 'react';
import MyPets from './MyPets';
import MyAdoptedPets from './MyAdoptedPets'
import {Link} from 'react-router-dom';

class ProfileContainer extends React.Component {

  handleAdoptedStatus = (userId, foundPet) => {
    // console.log(foundPet)
    // console.log(this.props.adopted)
    if (foundPet.adopted) {
      return (
        <div>
          <p className="adopted" style={{"font-size" : "20px"}}>Adopted! </p>
        </div>
      )
    }
  }
  
        // render() {
        //   console.log(this.props.myPets)
  myPetCards = () => {
    return(
      <div className="ui container">
        <Link to='/' className="headerThree" onClick={this.props.resetCheckbox}>Back to Pet Index</Link>
        <h2 className="headerFour">{this.props.currentUser.name}'s Pet List </h2>
        <br/>
        <div className="ui container">
          <MyAdoptedPets myAdoptedPets={this.props.myAdoptedPets} pets={this.props.pets}/>
        </div>
        <br/><br/>
        <div className="ui container">
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
    )
  }
    // }
  render() {
    return (
      <div>
        {this.myPetCards()}
      </div>
    )
  }
}

export default ProfileContainer;
