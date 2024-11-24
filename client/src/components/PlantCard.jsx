// PlantCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './PlantCard.css';

const PlantCard = ({ plant }) => (
  <div className="plant-card">
    <img src={plant.image} alt={plant.name} className="plant-image" />
    <h3>{plant.name}</h3>
    <p>{plant.description}</p>
    <Link to={`/plants/${plant.id}`} className="details-button">
      Detailed Information
    </Link>
  </div>
);

export default PlantCard;
