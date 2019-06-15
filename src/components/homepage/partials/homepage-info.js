import React, { Component } from 'react';
import '../css/homepage.css'

class HomepageInfo extends Component {

  render() {
    return (
      <span>
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
      </span>
    )
  }
}

export default HomepageInfo;
