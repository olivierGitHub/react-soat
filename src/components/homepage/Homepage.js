import React from 'react';
import './css/homepage.css';
import HomepageInfo from './partials/homepage-info';
import HomepagePicture from './partials/homepage-picture';

function Homepage() {
  return (
    <div className="container homepage-container">
      <h1>Soat group</h1>
      <div className="row">
        <div className="col-sm-4 homepage-info">
          <HomepageInfo title="Inspirons vos transformations"
                        description="SOAT, ce sont 360 consultants IT et coachs agiles qui développent un cercle vertueux entre connaissances et réalisations techniques pour transformer positivement vos organisations.">
          </HomepageInfo>
        </div>
        <div className="col-sm-4">
          <HomepagePicture />
        </div>
        <div className="col-sm-4 homepage-info">
          <HomepageInfo title="Nous accompagnons vos projets"
                        description="Du conseil, des réalisations et du coaching pour transformer durablement votre système d’information.">
          </HomepageInfo>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
