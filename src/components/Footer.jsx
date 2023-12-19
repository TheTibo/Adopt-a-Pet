import style from '../styles/Footer.module.css'

function Footer() {
  return (
    <div className={style.footer}>
      <p className={style.copyright}>©Dog&Cat </p>
      <ul className={style.footer_nav}>
        <li className={style.item_list}><a className={style.link} href="#">Contact</a></li>
        <li className={style.item_list}><a className={style.link} href="#">About us</a></li>
      </ul>
    </div>
  );
}

export default Footer;
