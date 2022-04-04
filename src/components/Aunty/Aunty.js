import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [ornament, house, setHouse] = useContext(RingContext);

    const handleHouse = () =>{
        const newHouse = house + 1;
        setHouse(newHouse);
    }

    return (
        <div>
            <h4>Aunty</h4>
            <p>House: {house}</p>
            <p><small>Ring: {ornament}</small></p>
            <button onClick={handleHouse}>buy house</button>
        </div>
    );
};

export default Aunty;