import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    // Conditional rendering options
    // 1. Element variable
    let command;
    if (cart.length === 0) {
        command = <p>Please add atleast 1 item!!</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more....</p>
    }
    else {
        command = <p>Thanks for adding items.</p>
    }

    // 2. Ternary operator [condition ? true : false]
    // 3. && operator (shorthand)
    // 4. || operator (or)

    return (
        <div>
            <h2>Selected Items: {cart.length}</h2>
            {command}
            {
                cart.map(tShirt =>
                <p key={tShirt._id}>
                    {tShirt.name}
                    <button onClick={()=> handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }

            {/* 2. ternary Operator */}
            {
                cart.length !== 4 ? <h5>Keep Adding</h5> : <button>Clear all</button>
            }
            {/* 3. && operator */}
            {
                cart.length === 4 && 
                    <button className='orange'>Review now</button>
            }
            {/* 4. || operator */}
            {
                cart.length ===0 || <div className='orange mt-4'>
                    yeaee!! you are buying!!
                </div>
            }
        </div>
    );
};

export default Cart;