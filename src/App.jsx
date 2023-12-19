import Filter from "./components/Filter";
import Card from "./components/Card";
import Footer from "./components/Footer";

import petToAdopt from "./data/petToAdopt.js";

import style from "./styles/App.module.css";
import { useState } from "react";

import Header from "./components/Header";

function App() {
  const [option, setOption] = useState("All");

  return (
    <>
      <Header />
      <main  style={{flexGrow: "1"}}>
        <Filter option={option} setOption={setOption} />

        <div className={style["card-list"]}>
          {petToAdopt
            .filter((pet) => option === "All" || pet.type === option)
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
      </main>

      <Footer />
    </>
  );
}

export default App;
