import React from 'react';
import '../css/homepage.css'

function HomepageInfo(props) {
    return (
      <React.Fragment>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </React.Fragment>
    )
}

export default HomepageInfo;
