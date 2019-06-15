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
          <div className="adoptedPets">
            <button className="adoptedPetsButton" onClick={this.handleShow}>Hide Adopted</button><br/>
            <div className="listOfPets">
              {
                this.props.myAdoptedPets.map(adoptedPet => {
                  return(
                    <li id="ulPets" key={adoptedPet.id}>
                      ❤︎{adoptedPet.name}
                    </li>
                  )
                })
              }
            </div>
          </div>
      )
    } else {
      return(
          <div className="adoptedPets">
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
