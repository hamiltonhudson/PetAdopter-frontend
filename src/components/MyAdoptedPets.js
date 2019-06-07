import React, { Fragment } from 'react';
import '../App.css';

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
        <div className="row">
          <div className="adoptedPets">
            <button className="adoptedPetsButton" onClick={this.handleShow}>Hide Adopted</button><br/>
            {
              this.props.myAdoptedPets.map(adoptedPet => {
                return(
                  <ul id="ulPets" key={adoptedPet.id}>
                    {adoptedPet.name}
                  </ul>
                )
              })
            }
          </div>
        </div>
      )
    } else {
      return(
        <div className="row">
          <div className="adoptedPets">
            <button className="adoptedPetsButton" onClick={this.handleShow}>Show Adopted</button>
          </div>
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
