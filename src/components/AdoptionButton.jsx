import { useState } from "react";
import style from "../styles/AdoptionButton.module.css";

function AdoptionButton() {
  const [buttonText, setButtonText] = useState("Adopt me !");

  const handleClick = (text) => {
    setButtonText(text);
    alert(
      "Thanks for your interest for this pet ! We're going to contact you for more informations.❤️"
    );
  };

  return (
    <button
      className={style["adoption-button"]}
      onClick={() => handleClick("✔️")}
    >
      {buttonText}
    </button>
  );
}

export default AdoptionButton;
