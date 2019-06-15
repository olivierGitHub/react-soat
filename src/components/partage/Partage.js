import React from 'react';
import './css/partage.css';
import PartagePartials from './partials/partage-partial';

function Partage() {
  return (
    <div className="container partage-container">
      <h1>La culture IT partagée</h1>
      <div className="row">
        <div className="col-sm-4">
          <PartagePartials title="Le blog"
                           description="Des équipes se constituent spontanément en fonction de leurs centres d’intérêt, pour décrypter les tendances technologiques et les bonnes pratiques sur le blog SOAT. Architecture, Web Front, Agilité, Mobilité, Cloud, Big Data, DevOps, Craftsmanship... choisissez votre team !"
                           imgSrc="https://www.soat.fr/sites/default/files/styles/image-element/public/paragraph/element/soat-icon-06-blog.png?itok=6SPzGdGv"
                           buttonText="Tous les articles">
          </PartagePartials>
        </div>
        <div className="col-sm-4">
          <PartagePartials title="Les événements"
                           description="Chaque mois, des événements conviviaux – matinale IT, Techlabs, Meet’Up et retours d’expérience - permettent d’échanger sur les technologies, les méthodes et pratiques en vogue. Participez à nos prochains événements sur simple inscription !"
                           imgSrc="https://www.soat.fr/sites/default/files/styles/image-element/public/paragraph/element/soat-icon-07-evenements-techniques.png?itok=x7ddGWVg"
                           buttonText="Tous les évènements">
          </PartagePartials>
        </div>
        <div className="col-sm-4">
          <PartagePartials title="La publication"
                           description="Rédigés par les maîtres de leur discipline, les livres blancs mènent une course de fond thématique quand les avis d’expert rebondissent sur l’actualité tech’ avec des mises en perspective, et les refcards offrent un aperçu complet sur une technologie spécifique. Et parce que les Soatiens sont des joueurs (sérieux) par nature, ils s’amusent aussi à concevoir des serious game."
                           imgSrc="https://www.soat.fr/sites/default/files/styles/image-element/public/paragraph/element/soat-icon-08-publications.png?itok=SvKFCSbz"
                           buttonText="Tous les publications">
          </PartagePartials>
        </div>
      </div>
    </div>
  );
}

export default Partage;
