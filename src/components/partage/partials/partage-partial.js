import React from 'react';
import '../css/partage.css';

function Partage(props) {
    return (
      <React.Fragment>
        <img src={props.imgSrc} />
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <button className="btn btn-info">{props.buttonText}</button>
      </React.Fragment>
    );
}

export default Partage;
