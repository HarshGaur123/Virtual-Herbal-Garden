

// import React, { useEffect, useState } from 'react';
// import './Dashboard.css';

// const Dashboard = ({ user }) => {
//   const [plants, setPlants] = useState([]);

//   useEffect(() => {
//     const fetchPlants = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/plants');
//         const data = await response.json();
//         setPlants(data);
//       } catch (error) {
//         console.error('Error fetching plants:', error);
//       }
//     };

//     fetchPlants();
//   }, []);

//   // Check if the user object is available
//   if (!user) {
//     return (
//       <div className="dashboard-container">
//         <p>Please log in to access the dashboard.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="dashboard-container">
//       <h2>Welcome, {user.name}</h2>
//       <p>Email: {user.email}</p>
//       <div className="plants-container">
//         {plants.map((plant) => (
//           <div className="plant-card" key={plant._id}>
//             <img src={plant.image} alt={plant.name} className="plant-image" />
//             <h3>{plant.name}</h3>
//             <p>{plant.description}</p>
//             <button onClick={() => { window.location.href = `/plant/${plant._id}` }}>
//               Detailed Information
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className="herbal-info">
//         <h2>About Herbal Plants</h2>
//         <p>
//           Herbal plants have been used for centuries in traditional medicine systems to promote health 
//           and treat various ailments. Each plant carries unique properties that contribute to physical 
//           and mental well-being. By exploring their medicinal value, you can discover natural solutions 
//           to enhance your health, immunity, and vitality. Plants are employed in different medicinal systems and ethnic medicines. 
//           India has a rich tradition of herbal medicines, contributing not only to Ayurveda & Siddha but also to the discovery of modern drugs and pharmacological research.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ user }) => {
  const [plants, setPlants] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

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

  const toggleDescription = (plantId) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [plantId]: !prev[plantId],
    }));
  };

  if (!user) {
    return (
      <div className="dashboard-container">
        <p>Please log in to access the dashboard.</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      <div className="plants-container">
        {plants.map((plant) => {
          const isExpanded = expandedDescriptions[plant._id];
          const shouldTruncate = plant.description.length > 50;
          const displayedDescription = isExpanded
            ? plant.description
            : plant.description.slice(0, 60) + (shouldTruncate ? '...' : '');

          return (
            <div className="plant-card" key={plant._id}>
              <img src={plant.image} alt={plant.name} className="plant-image" />
              <h3>{plant.name}</h3>
              <p>
                {displayedDescription}
                {shouldTruncate && (
                  <button
                    className="read-more-button"
                    onClick={() => toggleDescription(plant._id)}
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </p>
              <button onClick={() => { window.location.href = `/plant/${plant._id}` }}>
                Detailed Information
              </button>
            </div>
          );
        })}
      </div>

      <div className="herbal-info">
        <h2>About Herbal Plants</h2>
        <p>
          Herbal plants have been used for centuries in traditional medicine systems to promote health 
          and treat various ailments. Each plant carries unique properties that contribute to physical 
          and mental well-being. By exploring their medicinal value, you can discover natural solutions 
          to enhance your health, immunity, and vitality. Plants are employed in different medicinal systems and ethnic medicines. 
          India has a rich tradition of herbal medicines, contributing not only to Ayurveda & Siddha but also to the discovery of modern drugs and pharmacological research.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
