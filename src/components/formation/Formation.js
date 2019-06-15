import React from 'react';
import './css/formation.css';
import FormationRight from './partials/formation-right';
import FormationLeft from './partials/formation-left';

function Formation() {
  return (
    <div className="container formation-container">
      <div className="row">
        <div className="col-sm-6 formation-info">
          <FormationLeft />
        </div>
        <div className="col-sm-6">
          <FormationRight />
        </div>
      </div>
    </div>
  );
}

export default Formation;
