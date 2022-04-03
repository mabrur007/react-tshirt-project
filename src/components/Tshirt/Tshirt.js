import React from 'react';
import './Tshirt.css'

const Tshirt = (props) => {
    const { name, picture, price } = props.tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="product-img" />
            <h4>{name}</h4>
            <p>Price{ price}</p>
        </div>
    );
};

export default Tshirt;