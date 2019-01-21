import React, { Component } from 'react';

class PetCard extends Component {

  // const { pet } = props;
  // let botType;

  render() {
    // console.log(this.props)
    return (
      <div className="ui column">
        <div
          className="ui card"
          key={this.props.pet.id}
          onClick={() => {this.props.handleClick(this.props.pet.id)}}
            >
            <div className="image">
            <img alt="precious pet" src={this.props.pet.photo} />
          </div>
          <div className="content">
            <div className="header">
              {this.props.pet.name} {this.props.petType}
            </div>

            <div className="meta text-wrap">
              <small>{this.props.pet.description}</small>
            </div>
            <br></br>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat" />
              {this.props.pet.age}
            </span> <br></br>

            <span>
              <i className="icon lightning" />
              {this.props.pet.animal}
            </span>
            <span>
              <i className="icon shield" />
              {this.props.pet.breed}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default PetCard;
