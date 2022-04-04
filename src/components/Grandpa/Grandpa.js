import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import './Grandpa.css';

/* 
  context api
  1. call createContext with a default value
  2. set a variable of the context with uppercase
  3. Make sure you export the context to use it in other places
  4. Wrap your child content using <RingContext.Provider> 
  5. need to provide a value
  6. to consume the context from child component 
  7. useContext hook and we will need to pass the contextName

*/

export const RingContext = createContext('ring');

const Grandpa = () => {
  const [house, setHouse] = useState(1);

  const ornament = 'Diamond Ring';
  
  const buyHouseCount = () => {
    const newHOuse = house + 1;
    setHouse(newHOuse);
  }

    return (
      <RingContext.Provider value={[ornament, house, setHouse]}>
        <div className="grandpa">
          <h3>Grandpaa</h3>
          <button onClick={buyHouseCount}>Buy House</button>
          <p>House: {house}</p>
          <section style={{ display: "flex" }}>
            <Father house={house} ornament={ornament}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
          </section>
        </div>
      </RingContext.Provider>
    );
};

export default Grandpa;