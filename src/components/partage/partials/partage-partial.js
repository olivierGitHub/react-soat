import React, { Component } from 'react';
import '../css/partage.css';

class Partage extends Component {

  render() {
    return (
      <span>
        <img src={this.props.imgSrc} />
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <button className="btn btn-info">{this.props.buttonText}</button>
      </span>
    );
  }
}

export default Partage;
