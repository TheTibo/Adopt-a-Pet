import style from "../styles/Header.module.css";
import img from "../assets/slika.jpg";
import baneer_img from "../assets/baneer_img.png"

export default function Header() {
  return (
    <header className={style.header}>
      <img className={style.logo} src={img} alt="" />
      <h1>Dog & Cat</h1>
      <img className={style["baneer_img"]} src={baneer_img} alt="" />
    </header>
  );
}
