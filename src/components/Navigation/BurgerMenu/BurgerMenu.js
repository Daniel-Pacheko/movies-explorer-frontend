import React from "react";
import { NavLink } from "react-router-dom";
import "./BurgerMenu.css";
import accountIcon from "../../../images/account-icon.svg";

function MenuBurger() {
  const [isOpen, setIsOpen] = React.useState(false);

  function openPopup() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  function closePopup() {
    setIsOpen(false);
  }

  return (
    <>
      <button className="navigation__burger-btn" onClick={openPopup}></button>
      <div className={`navigation__burger-container ${isOpen ? "navigation__burger-container_open" : ""}`}>
        <div className={`navigation__burger-popup ${isOpen ? "navigation__burger-popup_open" : ""}`}>
          <button className="navigation__btn-close " onClick={closePopup}></button>
          <div className="navigation__burger-container-link">
            <NavLink to="/" className="navigation__link navigation__link-burger" onClick={closePopup}>Главная</NavLink>
            <NavLink to="/movies" className="navigation__link navigation__link-burger" activeClassName="navigation__link-burger_active" onClick={closePopup}> Фильмы</NavLink>
            <NavLink to="/saved-movies" className="navigation__link navigation__link-burger" activeClassName="navigation__link-burger_active" onClick={closePopup}>Сохранённые фильмы</NavLink>
          </div>
          <NavLink to="/profile" className="navigation__link navigation__link-burger navigation__link-burger_type_account" onClick={closePopup}>Аккаунт
            <img src={accountIcon} alt="Аккаунт" className="navigation__burger-account-icon" />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default MenuBurger;