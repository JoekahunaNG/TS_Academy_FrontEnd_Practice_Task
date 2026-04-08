import React from 'react';
import './PlanetCard.css';

const PlanetCard = ({ planet, distanceFromSun, image }) => {
  // The JSON provides relative image paths that currently 404 because the host repository path is unknown.
  // We will map the planet names directly to high-quality Wikipedia images as a reliable fallback.
  const planetImages = {
    "Mercury": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
    "Venus": "https://upload.wikimedia.org/wikipedia/commons/a/a9/PIA23791-Venus-NewlyProcessedView-20200608.jpg",
    "Earth": "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
    "Mars": "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    "Jupiter": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
    "Saturn": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
    "Uranus": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
    "Neptune": "https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829777304285%29_-_Modified_version.jpg",
    "Pluto": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Pluto_in_True_Color_-_High-Res.jpg"
  };

  const resolveImage = () => {
    return planetImages[planet] || image;
  };

  return (
    <figure className="planet-card glass">
      <div className="planet-image-container">
        <img src={resolveImage()} alt={`Image of ${planet}`} loading="lazy" />
      </div>
      <figcaption className="planet-info">
        <h3>{planet}</h3>
        <p className="distance">
          <span className="label">Distance from Sun:</span> 
          <span className="value">{distanceFromSun} million km</span>
        </p>
      </figcaption>
    </figure>
  );
};

export default PlanetCard;
