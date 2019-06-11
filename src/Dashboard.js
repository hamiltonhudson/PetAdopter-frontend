import React, { Component } from 'react';
import Welcome from './Welcome';
import PetContainer from './components/PetContainer';

class Dashboard extends Component {

  render() {
    return(
      <div className="App">
        {
          this.props.currentUser ?
            <PetContainer pets={this.props.pets}
              currentUser={this.props.currentUser}
              setAllPets={this.props.setAllPets}
              animalCheck={this.props.animalCheck}
              checkboxClick={this.props.checkboxClick}
              handleFilter={this.props.handleFilter}
              handleSorted={this.props.handleSorted}
              myPets={this.props.myPets}
              myAdoptedPets={this.props.myAdoptedPets}
              handleMyPets={this.props.handleMyPets}
              removeFromMyPets={this.props.removeFromMyPets}
              logout={this.props.logout}
            />
          :
          <Welcome />
        }
      </div>
    )
  }
}

export default Dashboard;
