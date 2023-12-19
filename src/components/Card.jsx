import AdoptionButton from "./AdoptionButton";

import style from "../styles/Card.module.css";

// eslint-disable-next-line react/prop-types
function Card({ name, age, picture, race, sex }) {
  return (
    <div className={style.card}>
      <div className={style["card-header"]}>
        <div
          className={style["card-img"]}
          style={{
            backgroundImage: `url('${picture}')`,
          }}
        ></div>
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
