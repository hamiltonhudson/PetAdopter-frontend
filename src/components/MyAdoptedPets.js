import React, { Fragment } from 'react';

class MyAdoptedPets extends React.Component {

  state = {
    shown: false
  }

  handleShow = () => {
    this.setState({
      shown: !this.state.shown
    })
  }

  showAdopted = () => {
    if(this.state.shown) {
      return (
        <div id="adoptedPets">
          <button className="adoptedPetsButton" onClick={this.handleShow}>Hide Adopted</button><br/>
          {
            this.props.myAdoptedPets.map(adoptedPet => {
              return(
                <ul key={adoptedPet.id}>
                  {adoptedPet.name}
                </ul>
              )
            })
          }
        </div>
      )
    } else {
      return(
        <div id="adoptedPets">
          <button className="adoptedPetsButton" onClick={this.handleShow}>Show Adopted</button>
        </div>
      )
    }
  }

  render() {
    return (
      <Fragment>
        {this.showAdopted()}
      </Fragment>
    )
  }
}

export default MyAdoptedPets;
