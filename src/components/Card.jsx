import AdoptionButton from "./AdoptionButton";
import LikeButton from "./LikeButton";
import style from "../styles/Card.module.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Card({ name, age, picture, race, sex }) {
  const [animalIndex, setAnimalIndex] = useState(0);
  const add1 = () => {
    setAnimalIndex(animalIndex + 1);
  };
  const remove1 = () => {
    setAnimalIndex(animalIndex - 1);
  };
  return (
    <div className={style.card}>
      <div className={style["card-header"]}>
        {animalIndex > 0 && (
          <button className={style.imgPrevious} onClick={() => remove1()}>
            Previous
          </button>
        )}

        {animalIndex < 1 && (
          <button className={style.imgNext} onClick={() => add1()}>
            Next
          </button>
        )}
        <div
          className={style["card-img"]}
          style={{ backgroundImage: `url('${picture[animalIndex]}')` }}
        ></div>
        <figcaption
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <LikeButton />
        </figcaption>
      </div>
      <div className={style["card-body"]}>
        <h2>{name}</h2>
        <h3>{age}</h3>
        <h3>{race}</h3>
        <p>{sex}</p>
        <AdoptionButton />
      </div>
    </div>
  );
}

export default Card;
