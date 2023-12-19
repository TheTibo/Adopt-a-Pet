
import Filter from "./components/Filter";
import Card from "./components/Card";

import petToAdopt from "./data/petToAdopt.js";

import style from "./styles/App.module.css";
import { useState } from "react";

import Header from "./components/Header";

function App() {

  const [option, setOption] = useState('All')

  return ( 
    <>

      <Filter 
        option={option} 
        setOption={setOption} 
      />

      <div className={style["card-list"]}>
        {petToAdopt
        .filter((pet) =>
          option === 'All' || pet.type === option 
        )
        .map((pet) => (
          <Card
            key={pet.name}
            name={pet.name}
            age={pet.age}
            picture={pet.picture}
            race={pet.race}
            sex={pet.sex}
        />
        ))}
      </div>

      <Header/> 
  
    </>
  );
}

export default App;
