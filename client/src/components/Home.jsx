
import React from 'react';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import './Home.css';


const Home = () => {
  const images = [
    'https://wallpaperaccess.com/full/2680927.jpg',
    'https://i.pinimg.com/originals/c6/c5/88/c6c588d5384611ba276910393bb86b32.jpg',
    'https://dev.mos.cms.futurecdn.net/TiuLoJSNYeqoDq3G3gMhS9.jpg',
  ];

  const cardData = [
    {
      name: 'Guduchi',
      image: 'https://organicindiausa.com/wp-content/uploads/guduchi.jpg',
      description: 'Guduchi is known for its immune-boosting and detoxifying properties.',
      title:'Guduchi is known for its immune-boosting and detoxifying properties. It strengthens the body\'s resistance against infections.',
      buttonText: 'Learn More',
    },
    {
      name: 'Bhringraj',
      image: 'https://i.pinimg.com/originals/39/66/a8/3966a85b55d7a20e4a5cf8357f2e0452.jpg',
      title:'Bhringraj is beneficial for hair health and can improve liver function by promoting detoxification.',
      description: 'Bhringraj is known for its benefits in hair health and liver function.',
      buttonText: 'Learn More',
    },
    {
      name: 'Shankhapushpi',
      image: 'https://fusion.werindia.com/wp-content/uploads/2021/09/Shankhpushpi_Fusion_WeRIndia.jpg',
      title:'Shankhapushpi helps in improving mental clarity and enhancing memory, as well as relieving stress and anxiety',
      description: 'Shankhapushpi is an herb used for improving brain function and relieving stress.',
      buttonText: 'Learn More',
    },
  ];

  return (
    <div>
      <h1>Virtual Herbal Garden</h1>
      <Carousel images={images} autoPlay={true} autoPlayInterval={4000} />
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            //title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            onButtonClick={() => alert(` ${card.title}`)}
          />
        ))}
      </div>
      <h1>What Does it Do?..</h1>
      <p>
The Virtual Herbal Garden is an interactive, user-friendly platform that allows users to explore medicinal plants in a virtual environment. It includes:

3D Models: Users can interact with realistic 3D models of plants, zoom in, and view them from different angles. 
Detailed Information: Each plant has comprehensive details such as botanical name, common uses, medicinal benefits, 
and cultivation methods. Multimedia Integration: The platform is enriched with high-quality images, videos, and audio 
descriptions to create an engaging learning experience. Search & Filter Options: Users can search for plants based on
 medicinal properties, types, or regions, and filter them for more precise results. Virtual Tours: It provides
  guided tours, like "Plants for Immunity," which takes users through a curated selection of plants with specific
   health benefits. User Interaction:
 Features allow users to bookmark their favorite plants, take notes, and share information on social media.
 Many herbs and teas offer harmless subtle ways to improve your health. However, you should always pay attention to what the evidence says about each herb’s effectiveness as well as potential interactions or safety issues.

Avoid using herbs for infants and children and for those who are pregnant and nursing. Most herbs haven’t been tested for safety for those who are vulnerable. If you would like to try herbal supplements and you are pregnant or nursing, speak with a healthcare professional first.</p>
    </div>
  );
};

export default Home;
