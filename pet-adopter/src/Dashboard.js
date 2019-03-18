import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
              animalCheck={this.props.animalCheck}
              checkboxClick={this.props.checkboxClick}
              handleFilter={this.props.handleFilter}
              handleSorted={this.props.handleSorted}
              myPets={this.props.myPets}
              myAdoptedPets={this.props.myAdoptedPets}
              handleMyPets={this.props.handleMyPets}
              removeFromMyPets={this.props.removeFromMyPets}
            />
          :
          <Welcome />
        }
      </div>
    )
  }
}

export default Dashboard;
