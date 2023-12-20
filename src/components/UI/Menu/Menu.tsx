import classes from "./Menu.module.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className={classes.menu}>
      <NavLink className={classes.menuItem} to="/">
        Главная
      </NavLink>
      <NavLink className={classes.menuItem} to="/driftpage">
        Дрифт-такси
      </NavLink>
      <NavLink className={classes.menuItem} to="/timeattackpage">
        Time Attack
      </NavLink>
      <NavLink className={classes.menuItem} to="/forzapage">
        Forza Karting
      </NavLink>
    </nav>
  );
};

export default Menu;
