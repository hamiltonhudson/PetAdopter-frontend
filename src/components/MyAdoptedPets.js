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
        <div className="row" id="adoptedPets">
          <div className="col l6 m4 s2">
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
