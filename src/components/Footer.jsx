import style from '../styles/Footer.module.css'

function Footer() {
  return (
    <div className={style.footer}>
      <p className={style.copyright}>©Dog&Cat </p>
      <li className={style.footer_nav}>
        <ul><a className={style.link} href="#">Contact</a></ul>
        <ul><a className={style.link} href="#">About us</a></ul>
      </li>
    </div>
  );
}

export default Footer;
