import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../Route/routes';
import s from './AppBar.module.css';

const Navigation = () => {
  return (
    <ul className={s.navigation}>
      <li className={s.item}>
        <NavLink
          exact
          className={s.link}
          activeClassName={s.activeLink}
          to={routes.home}
        >
          Random dish
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink
          className={s.link}
          activeClassName={s.activeLink}
          to={routes.favorites}
        >
          Favorites
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;