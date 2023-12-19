import style from "../styles/Header.module.css";
import img from "../assets/slika.jpg";

export default function Header() {
  return (
    <header className={style.header}>
      <img className={style.logo} src={img} alt="" />
      <h1>Adopt A Pet</h1>
    </header>
  );
}
