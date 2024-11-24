import React from 'react';
import './Services.css';

const Services = () => {
    const plantData = [
        {
          name: 'Guduchi',
          image: 'https://www.healthshots.com/wp-content/uploads/2020/01/shutterstock_1506209762.jpg',
          medicinalValue: 'Boosts immunity and detoxifies the body.',
          usage: 'Prepare a decoction of Guduchi stem for immunity enhancement.',
        },
        {
          name: 'Bhringraj',
          image: 'https://i.pinimg.com/originals/39/66/a8/3966a85b55d7a20e4a5cf8357f2e0452.jpg',
          medicinalValue: 'Promotes hair health and improves liver function.',
          usage: 'Apply Bhringraj oil to the scalp for hair growth.',
        },
        {
          name: 'Ashwagandha',
          image: 'https://organicindiausa.com/wp-content/uploads/ashwagandha.jpg',
          medicinalValue: 'Helps manage stress and boosts vitality.',
          usage: 'Consume Ashwagandha powder with warm milk before bedtime.',
        },
        {
          name: 'Tulsi (Holy Basil)',
          image: 'https://i.etsystatic.com/18026585/r/il/65b6eb/2240039219/il_fullxfull.2240039219_59ht.jpg',
          medicinalValue: 'Provides relief from respiratory disorders and improves immunity.',
          usage: 'Boil Tulsi leaves in water and drink as tea to improve respiratory health.',
        },
        {
          name: 'Neem',
          image: 'https://www.theayurveda.org/wp-content/uploads/2016/07/Neem-leaves-for-skin.jpg',
          medicinalValue: 'Has antibacterial and antifungal properties.',
          usage: 'Use Neem leaves paste for skin treatments or boil in water for bathing.',
        },
        {
          name: 'Aloe Vera',
          image: 'https://img.thrfun.com/img/185/495/potted_aloe_x2.jpg',
          medicinalValue: 'Soothes burns, heals wounds, and improves skin health.',
          usage: 'Apply Aloe Vera gel directly to the affected area for healing burns and skin irritation.',
        },
        {
          name: 'Shatavari',
          image: 'http://urbol.com/wp-content/uploads/2016/11/shatavari.jpg',
          medicinalValue: 'Supports reproductive health and balances hormones.',
          usage: 'Consume Shatavari powder mixed with milk for hormone regulation.',
        },
        {
          name: 'Brahmi',
          image: 'https://tse4.mm.bing.net/th?id=OIP.bqs-zk84XcBl2kzbL-kFQAHaFj&pid=Api&P=0&h=180',
          medicinalValue: 'Enhances memory and cognitive function.',
          usage: 'Consume Brahmi leaves or use as oil for mental relaxation.',
        },
        {
          name: 'Amla',
          image: 'http://cdn.shopify.com/s/files/1/2858/6430/products/Amla_Indian_Gooseberry_plant_for_sale_1200x1200.png?v=1575503664',
          medicinalValue: 'Rich in Vitamin C, it boosts immunity and improves digestion.',
          usage: 'Consume Amla juice daily for immune and digestive health.',
        },
        {
          name: 'Sandalwood',
          image: 'https://i.etsystatic.com/26426137/r/il/b4139b/2821026994/il_1140xN.2821026994_7oe8.jpg',
          medicinalValue: 'Used for skincare and as a soothing aromatic agent.',
          usage: 'Apply Sandalwood paste for glowing skin or use its oil for aroma therapy.',
        },
        {
          name: 'Bel (Bael)',
          image: 'https://shrigramorganics.com/wp-content/uploads/2020/06/41g1S3Cp2L._SX425_.jpg',
          medicinalValue: 'Improves digestion and treats constipation.All parts of the bael tree are used medicinally in Ayurveda. Its fruit is a boon for gut health, as it helps in digestion and cures ulcers. Its roots have anti-inflammatory, wound healing, and antidote properties.',
          usage: 'Prepare Bel fruit juice or consume pulp for digestive benefits.',
        },
      ];
      

  return (
    <div className="services">
      <h1>Our Services</h1>
      <p>
        Explore the therapeutic world of medicinal plants through our interactive platform. Discover
        how these plants can enhance your health and well-being with detailed information on their
        medicinal properties and usage.
      </p>
      <table className="plant-table">
        <thead>
          <tr>
            <th>Plant Name</th>
            <th>Medicinal Value</th>
            <th>Image</th>
            <th>How to Use</th>
          </tr>
        </thead>
        <tbody>
          {plantData.map((plant, index) => (
            <tr key={index}>
              <td>{plant.name}</td>
              <td>{plant.medicinalValue}</td>
              <td>
                <img src={plant.image} alt={plant.name} className="plant-image" />
              </td>
              <td>{plant.usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
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

export default Services;
