

// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import './Carousel.css';

// const Carousel = ({ images, autoPlay, autoPlayInterval }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (autoPlay) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) =>
//           prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         );
//       }, autoPlayInterval);
//       return () => clearInterval(interval); // Clear interval on component unmount
//     }
//   }, [autoPlay, autoPlayInterval, images.length]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="carousel-container">
//       <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//         {images.map((image, index) => (
//           <div className="carousel-image" key={index}>
//             <img src={image} alt={`Slide ${index}`} />
//           </div>
//         ))}
//       </div>
//       <button className="carousel-button prev" onClick={handlePrev}>
//         &#10094; {/* Left Arrow */}
//       </button>
//       <button className="carousel-button next" onClick={handleNext}>
//         &#10095; {/* Right Arrow */}
//       </button>
//     </div>
//   );
// };


// Carousel.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.string).isRequired,
//   autoPlay: PropTypes.bool,
//   autoPlayInterval: PropTypes.number,
// };

// // Setting default props
// Carousel.defaultProps = {
//   autoPlay: false,
//   autoPlayInterval: 3000,
// };

// export default Carousel;


import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';
import ModelViewer from './modelViewer'; 

const Carousel = ({ models }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === models.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? models.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-model">
        <ModelViewer path={models[currentIndex]} />
      </div>
      <button className="carousel-button prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

Carousel.propTypes = {
  models: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
