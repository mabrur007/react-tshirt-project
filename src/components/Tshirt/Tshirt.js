import React from 'react';
import './Tshirt.css'

const Tshirt = ({ tShirt, handleAddToCart }) => {
  const { name, picture, price } = tShirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="product-img" />
      <h4>{name}</h4>
      <p>Price{price}</p>
      <button onClick={() => handleAddToCart(tShirt)}>Add To Cart</button>
    </div>
  );
};

export default Tshirt;