

import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ user }) => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch('http://localhost:5000/plants');
        const data = await response.json();
        setPlants(data);
      } catch (error) {
        console.error('Error fetching plants:', error);
      }
    };

    fetchPlants();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      <div className="plants-container">
        {plants.map((plant) => (
          <div className="plant-card" key={plant._id}>
            <img src={plant.image} alt={plant.name} className="plant-image" />
            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <button onClick={() => { window.location.href = `/plant/${plant._id}` }}>
              Detailed Information
            </button>
          </div>
        ))}
      </div>
      <div className="herbal-info">
        <h2>About Herbal Plants</h2>
        <p>
          Herbal plants have been used for centuries in traditional medicine systems to promote health 
          and treat various ailments. Each plant carries unique properties that contribute to physical 
          and mental well-being. By exploring their medicinal value, you can discover natural solutions 
          to enhance your health, immunity, and vitality.Plants are employed in different medicinal systems and ethnic medicines. 
          India has rich tradition of herbal medicines and it has outstanding contributions not only in form of
           Ayurveda & Siddha but also in the discovery of modern drugs and pharmacological research.
            Our medicinal plant database provides information on scientific name, family, 
          vernacular name, medicinal uses, location of species and images of herbarium specimen. 
          Many herbs and teas offer harmless subtle ways to improve your health. However, you should 
          always pay attention to what the evidence says about each herb’s effectiveness as well as
           potential interactions or safety issues.

Avoid using herbs for infants and children and for those who are pregnant and nursing. Most herbs haven’t been
 tested for safety for those who are vulnerable. If you would like to try herbal supplements and you are pregnant or nursing,
 speak with a healthcare professional first.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
