import React from 'react';
import '../HighlightsSection.css';
import imageCard1 from '../assets/greek salad.jpg';
import imageCard2 from '../assets/bruchetta.svg';
import imageCard3 from '../assets/lemon dessert.jpg';
import scooterIcon from '../assets/delivery-icon.svg';


const cards = [
  {
    title: 'Greek Salad',
    description: 'The famous greek salad made of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    price: '£13.99',
    image: imageCard1,
    icon: scooterIcon,
  },
  {
    title: 'Bruschetta',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    price: '£8.49',
    image: imageCard2,
    icon: scooterIcon,
  },
  {
    title: 'Lemon Dessert',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    price: '£7.49',
    image: imageCard3,
    icon: scooterIcon,
  },
];

function HighlightsSection() {
  return (
    <div className="highlights-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="highlights-title">This week's Specials!</h1>
        <div className="button-container">
          <span className="button-text">Online Menu</span>
        </div>
      </div>
      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.title} />
            <div className="card-content">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 className="card-title">{card.title}</h2>
                <p className="card-price">{card.price}</p>
              </div>
              <p className="card-description">{card.description}</p>
              <div className="card-footer">
                <span className="footer-text">Order a delivery</span>
                <img src={card.icon} alt="scooter icon" className="footer-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HighlightsSection;
