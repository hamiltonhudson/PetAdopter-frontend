import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Welcome from './Welcome';
import PetContainer from './components/PetContainer';

class Dashboard extends Component {

  render() {
    return(
      <div className="App">
        {/* <Route path="/" component={(props) => {console.log(props); return <h1>text</h1>}}/> */}
        {
          this.props.currentUser ?
          <PetContainer pets={this.props.pets} animalCheck={this.props.animalCheck}
            checkboxClick={this.props.checkboxClick} handleFilter={this.props.handleFilter}
            handleSorted={this.props.handleSorted} handleMyPets={this.props.handleMyPets}
            currentUser={this.props.currentUser} />
        :
        <Welcome />
        }
      </div>
    )
  }
}

export default Dashboard;
