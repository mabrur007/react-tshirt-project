import React, { useState } from 'react';
import Father from '../Father/Father';
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import './Grandpa.css';

const Grandpa = () => {
  const [house, setHouse] = useState(1);
  
  const buyHouseCount = () => {
    const newHOuse = house + 1;
    setHouse(newHOuse);
  }

    return (
      <div className="grandpa">
        <h3>Grandpaa</h3>
        <button onClick={buyHouseCount}>Buy House</button>
        <p>House: { house}</p>
        <section style={{ display: "flex" }}>
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    );
};

export default Grandpa;