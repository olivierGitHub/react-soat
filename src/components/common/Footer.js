import React from 'react';
import './css/footer.css';

function Footer() {
  return (
        <div className="footer-color">
            <div className="row footer-soat">
              <div className="col-sm-4">
                <a href="">Mentions Légales</a>
                <p>Tous droits réservés à Olivier Coulibaly et Soat</p>
              </div>
              <div className="col-sm-4">
                  <p>Retrouvez-nous sur :</p>
                  <p>Facebook</p>
                  <p>Twitter</p>
              </div>
              <div className="col-sm-4">
                <div><a href="">S'abonner aux actualités Soat</a></div>
                <div><a href="">Contact</a></div>
              </div>
            </div>
        </div>
    );
}

export default Footer;
