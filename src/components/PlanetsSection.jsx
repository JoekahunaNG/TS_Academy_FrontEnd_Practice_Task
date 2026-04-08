import React, { useState, useEffect } from 'react';
import PlanetCard from './PlanetCard';
import './PlanetsSection.css';

const PlanetsSection = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Requirements: use Fetch API to fetch dynamic data
    const fetchPlanets = async () => {
      try {
        const response = await fetch('https://anurella.github.io/json/planets.json');
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        setPlanets(data);
      } catch (err) {
        console.error("Failed to fetch planets:", err);
        setError("Could not load planetary data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  return (
    <section id="planets" className="planets-section">
      <div className="container">
        <div className="section-header">
          <h2>Data <span className="text-gradient">Exploration</span></h2>
          <p>Discover fascinating facts about the planets in our solar system</p>
        </div>

        {loading && (
          <div className="state-container">
            <div className="loader"></div>
            <p>Scanning the cosmos...</p>
          </div>
        )}

        {error && (
          <div className="state-container error">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="planets-grid">
            {planets.map((p, index) => (
              <PlanetCard 
                key={index}
                planet={p.planet}
                distanceFromSun={p.distanceFromSun}
                image={p.image}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PlanetsSection;
