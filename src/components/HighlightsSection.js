import React from 'react';
import '../HighlightsSection.css';

const highlights = [
  {
    id: 1,
    title: 'Greek Salad',
    description: 'The famous greek salad made of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    price: '£13.99',
    image: require('../assets/greek salad.jpg').default,
    orderImage: require('../assets/ride-scooter.png').default,
  },
  {
    id: 2,
    title: 'Bruschetta',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    price: '£8.49',
    image: require('../assets/bruchetta.svg').default,
    orderImage: require('../assets/ride-scooter.png').default,
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    price: '£7.49',
    image: require('../assets/lemon dessert.jpg').default,
    orderImage: require('../assets/ride-scooter.png').default,
  }
];

const HighlightsSection = () => {
  return (
    <div className="highlights-section">
      <h2>This weeks Specials!</h2>
      <div className="cards">
        {highlights.map(item => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} className="card-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="price">{item.price}</p>
            <div className="order">
              <p>Order delivery</p>
              <img src={item.orderImage} alt="Order delivery" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HighlightsSection;