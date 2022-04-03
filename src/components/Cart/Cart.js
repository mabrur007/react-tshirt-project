import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h2>Selected Items: { cart.length}</h2>
            {
                cart.map(tShirt =>
                <p key={tShirt._id}>
                    {tShirt.name}
                    <button onClick={()=> handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;