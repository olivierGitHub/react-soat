import React from 'react';
import '../css/homepage.css'

function HomepageInfo(props) {
    return (
      <span>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </span>
    )
}

export default HomepageInfo;
