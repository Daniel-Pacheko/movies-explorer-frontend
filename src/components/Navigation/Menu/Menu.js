import React from "react";
import { NavLink } from 'react-router-dom';
import accountIcon from "../../../images/account-icon.svg";

function Menu() {
  return (
    <>
    <div className="navigation__container">
      <NavLink to='/movies' className="navigation__link navigation__link_type_movies" activeClassName="navigation__link_active">Фильмы</NavLink>
      <NavLink to='/saved-movies' className="navigation__link navigation__link_type_saved-movies" activeClassName="navigation__link_active">Сохранённые фильмы</NavLink>
    </div>
    <NavLink to='/profile' className="navigation__link navigation__link_type_account">Аккаунт
        <img className="navigation__account-icon" src={accountIcon} alt="Аккаунт" />
    </NavLink>
    </>
   
  )
}

export default Menu;