import React from 'react';
import './css/presentation.css';

function Presentation() {
  return (
    <div className="container presentation-container">
      <div className="row">
        <div className="col-sm-6 presentation-info">
          <h4>Présentons-nous</h4>
          <p>SOAT, ce sont 360 consultants IT et coachs agiles qui développent un cercle vertueux entre connaissances et réalisations techniques pour transformer positivement vos organisations.</p>
          <button className="btn btn-info">en savoir plus</button>
        </div>
        <div className="col-sm-6">
          <img className="soat-photo" src="https://www.soat.fr/sites/default/files/paragraph/header/170519_soat_gif_05_presentons_ae.gif" />
        </div>
      </div>
    </div>
  );
}

export default Presentation;
