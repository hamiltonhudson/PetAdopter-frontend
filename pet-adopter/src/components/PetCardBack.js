import React, { Component } from 'react';

class PetCardBack extends Component {

  render() {
    return(
      <div>
        {this.props.pet.description}
      </div>
    )
  }
}

export default PetCardBack;
