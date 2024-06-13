import React from 'react';
import './ProductCard.css';

function ProductCard({ name, image, description, isAvailable }) {
  const cardClass = isAvailable ? 'product-card available' : 'product-card unavailable';

  return (
    
    <div className={cardClass}>
        
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-description">{description}</p>
    </div>
    
  );
}

export default ProductCard;