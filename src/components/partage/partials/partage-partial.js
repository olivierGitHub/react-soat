import React from 'react';
import '../css/partage.css';

function Partage(props) {
    return (
      <span>
        <img src={props.imgSrc} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button className="btn btn-info">{props.buttonText}</button>
      </span>
    );
}

export default Partage;
