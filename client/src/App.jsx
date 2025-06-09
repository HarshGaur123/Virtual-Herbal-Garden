

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PlantDetail from './components/PlantDetail';
import Services from './components/Services'; 
import Contact from './components/Contact';


import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  
  const plantsData = [
    {
      _id: '672ce328b9b40bfcf8fd6255',
      name: 'Guduchi',
      image: 'https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/guduchi.jpg',
      description: 'Guduchi is known for its immune-boosting and detoxifying properties.',
      longDescription: 'Guduchi (Tinospora cordifolia) is a highly revered herb in Ayurveda, known for its detoxifying, immune-boosting, and anti-inflammatory properties.',
      hotspots: [
        {
          position: { x: 10, y: 20, z: 0 },
          info: 'Guduchi is known for its immune-boosting and detoxifying properties. It strengthens the body\'s resistance against infections.'
        }
      ]
    },
    {
      _id: '672ce328b9b40bfcf8fd6256',
      name: 'Champak',
      model: '/models/champak.glb',
      description: 'Bhringraj is known for its benefits in hair health and liver function.',
      longDescription: 'Helth benefits are : Man can live a healthy life if his body is strong and refreshed. Champak flower is considered the best medicine to strengthen the body. Dry and powder the champak flower in the shade and mix it with honey and eat it every morning to strengthen the body.',
      hotspots: [
        {
          position: { x: 15, y: 10, z: 5 },
          info: 'Gain physical strength, Relieve nervousness, Decreased bile, For masculinity, Cure the flu, Illuminate eyesight, Urinary problems, Cure sexually transmitted diseases'
        }
      ]
    },
    {
      _id: '672ce29fb9b40bfcf8fd624d',
      name: 'Ashwagandha',
      model: '/models/Ahwagandha .glb',
      description: 'Ashwagandha is an adaptogenic herb used to help the body manage stress and improve vitality.',
      longDescription: 'Ashwagandha (Withania somnifera) is known for its stress-reducing properties, boosting energy levels, improving memory, and supporting overall wellness.',
      hotspots: [
        {
          position: { x: 5, y: 10, z: 0 },
          info: 'Ashwagandha is a powerful adaptogen that helps the body cope with stress and boosts overall vitality.'
        }
      ]
    },
    {
      _id: '672ce29fb9b40bfcf8fd624e',
      name: 'Tulsi',
      model: '/models/tulsi.glb',
      description: 'Tulsi, also known as Holy Basil, is revered for its medicinal properties and its role in balancing the body.',
      longDescription: 'Tulsi (Ocimum sanctum) is known for its anti-inflammatory, antibacterial, and antioxidant properties.',
      hotspots: [
        {
          position: { x: 20, y: 15, z: 10 },
          info: 'Tulsi is revered for its role in balancing the body and mind, offering anti-inflammatory and stress-relieving properties.'
        }
      ]
    },
    {
      _id: '672ce29fb9b40bfcf8fd6250',
      name: 'Morpankh',
      model: '/models/morpankh.glb',
      description: 'Mayurpankh plants have been used for their medicinal properties in traditional medicine. Some cultures believe that these plants have healing properties, and their leaves are used to make herbal remedies.',
      longDescription: 'One of the primary uses of Morpankh plants is their air-purifying properties. These plants are exceptional at removing toxins from the air, making your indoor environment cleaner and healthier. Mayurpankh plants absorb pollutants like formaldehyde and benzene, which are commonly found in household items and cleaning products. Having these plants in your home can contribute to improved air quality and help reduce the risk of respiratory issues.',
      hotspots: [
        {
          position: { x: 25, y: 5, z: 0 },
          info: 'Mayurpankh plants are more than just houseplants; they are living art pieces that bring beauty and benefits into your life. With their air-purifying abilities, aesthetic appeal, and cultural significance, these plants are an excellent choice for your home or office.'
        }
      ]
    },
    {
      _id: '6739e56936ba276a05307338',
      name: 'Neem',
      model: '/models/tree.glb',
      description: 'Neem is a versatile medicinal plant known for its antimicrobial properties.',
      longDescription: 'Neem (Azadirachta indica) is used in Ayurvedic medicine for treating skin disorders, boosting immunity, and purifying the blood.',
      hotspots: [
        {
          position: { x: 10, y: 30, z: 0 },
          info: 'Neem is known for its powerful antimicrobial properties and is used in various treatments for skin and immunity.'
        }
      ]
    },
    {
      _id: '6739e56936ba276a05307339',
      name: 'Sandalwood',
      model: '/models/sandlewood2.glb',
      description: 'Sandalwood is a fragrant wood known for its use in perfumes and traditional medicine.',
      longDescription: 'Sandalwood (Santalum album) is a small tree famous for its aromatic heartwood, used in skincare products and religious ceremonies.',
      hotspots: [
        {
          position: { x: 15, y: 25, z: 5 },
          info: 'Sandalwood is used for its soothing aroma and is a common ingredient in cosmetics and skincare products.'
        }
      ]
    },
    {
      _id: '6739e56936ba276a0530733a',
      name: 'Aloe Vera',
      model: '/models/aloe_vera_plant.glb',
      description: 'Aloe Vera is a succulent plant known for its soothing gel used in skincare.',
      longDescription: 'Aloe Vera is recognized for its cooling and healing properties. Its gel is used to treat burns, wounds, and skin irritations.',
      hotspots: [
        {
          position: { x: 20, y: 10, z: 0 },
          info: 'Aloe Vera gel is renowned for its soothing effects on the skin, especially for treating burns and irritations.'
        }
      ]
    },
    {
      _id: '6739e56936ba276a0530733b',
      name: 'Bel',
      model: '/models/bel1.glb',
      description: 'Bel, or Bael, is a sacred tree in India known for its fruit and medicinal value.',
      longDescription: 'Bel (Aegle marmelos) is used for digestive health, treating diarrhea, dysentery, and constipation.',
      hotspots: [
        {
          position: { x: 30, y: 20, z: 0 },
          info: 'Bel fruit is known for its digestive benefits and is often used to treat gastrointestinal issues.'
        }
      ]
    },
      {
        _id: "673db8040def7876db9b8092",
        name: "Daisies",
        model: '/models/chamomile.glb',
        description: "Daisies are cheerful, bright flowers known for their distinctive white petals and yellow centers.",
        longDescription: "Daisies (Bellis perennis) are perennial flowering plants commonly found in meadows and gardens. They are known for their medicinal properties, including anti-inflammatory and wound-healing benefits. Daisies symbolize purity and innocence, often used in teas and natural remedies.",
        
        hotspots: [
          {
            position: { x: 30, y: 20, z: 0 },
            info: 'Used in herbal teas to soothe digestion and reduce inflammation.Daisy petals are used in herbal infusions, skincare products, and as a natural remedy for minor wounds'
          }
        ]
      },

      {
        _id: "673dca540def7876db9b8093",
        name: "Hibiscus",
        model: '/models/hibiscus.glb',
        description: "Hibiscus, also known as Hibiscus sabdariffa, is a flowering plant nati…",
        longDescription: "One of the many interesting hibiscus benefits is its high vitamin C. Hibiscus benefits the body’s ability to balance cholesterol levels and improve blood flow.Hibiscus is a perennial herb in the Malvaceae (i.e. mallow) family of plants. It was originally native to Western Africa, but can now be found growing around the world in warm climates.",
        
        hotspots: [
          {
            position: { x: 30, y: 20, z: 0 },
            info: 'Hibiscus benefits the body’s ability to balance cholesterol levels and improve blood flow.Elevated cholesterol levels, known clinically as hypercholesterolemia, are linked with an increased risk for heart disease.'

          }
        ]
      }
      

  ];
  
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar user={user} handleLogout={handleLogout} />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup setUser={setUser} />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route
              path="/dashboard"
              element={<Dashboard user={user} plantsData={plantsData} />}
            />
            <Route
              path="/plant/:id"
              element={<PlantDetail plantsData={plantsData} />}
            />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
