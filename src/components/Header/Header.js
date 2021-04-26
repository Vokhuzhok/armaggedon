import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.mainTop}>
      <div className={style.main}>
        <div className={style.text}>
          <h1>ARMAGGEDON V</h1>
          <p>
            Сервис мониторинга и уничтожения астероидов,
            <br /> опасно подлетающих к Земле
          </p>
        </div>
        <div className={style.nav}>
          <NavLink exact to='/' activeClassName={style.link}>
            Астероиды
          </NavLink>
          <NavLink to='/destructions' activeClassName={style.link}>
            Уничтожение
          </NavLink>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
