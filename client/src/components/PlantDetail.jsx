
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './PlantDetail.css';

// Hotspot component (increased size)
const Hotspot = ({ position, info, onClick }) => {
  return (
    <mesh position={position} onClick={() => onClick(info)} castShadow receiveShadow>
      {/* Increase the radius of the hotspot for larger size */}
      <sphereGeometry args={[5, 16, 16]} /> {/* Radius increased to 1 */}
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

// PlantDetail component
const PlantDetail = ({ plantsData }) => {
  const { id } = useParams();
  const plant = plantsData.find((p) => p._id === id);
  const [hotspotInfo, setHotspotInfo] = useState(null);

  if (!plant) {
    return <div>Plant not found</div>;
  }

  const Model = ({ modelPath }) => {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} scale={[12, 12, 12]} position={[0, -3, 0]} />;
  };

  return (
    <div className="plant-detail">
      <div className="plant-info">
        <h1>{plant.name}</h1>
        <p>{plant.longDescription}</p>
        {hotspotInfo && (
          <div className="hotspot-info">
            <p>{hotspotInfo}</p>
            <button onClick={() => setHotspotInfo(null)}>Close</button>
          </div>
        )}
      </div>
      <div className="plant-canvas-container">
        <Canvas className="plant-canvas">
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 5]} />
          <Model modelPath={plant.model} />
          
          {/* Hotspots with larger size and positioned closer */}
          {plant.hotspots.map((hotspot, index) => (
            <Hotspot
              key={index}
              position={[
                hotspot.position.x * 12,  // Adjust for scale factor
                hotspot.position.y * 12,
                hotspot.position.z * 12
              ]}
              info={hotspot.info}
              onClick={setHotspotInfo}
            />
          ))}
          <OrbitControls />
        </Canvas>
      </div>
      
    </div>
  );
};

export default PlantDetail;
