import React from 'react';
import './css/footer.css';

function Footer() {
  return (
        <div className="footer-color">
            <div className="row footer-soat">
              <div className="col-sm-6">
                <a href="">Mentions Légales</a>
                <p>Tous droits réservés à Olivier Coulibaly et Soat</p>
              </div>
              <div className="col-sm-6">
                  <p>Retrouvez-nous sur :</p>
                  <p>Facebook</p>
                  <p>Twitter</p>
              </div>
            </div>
        </div>
    );
}

export default Footer;
