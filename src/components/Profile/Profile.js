import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Profile() {

  return (
    <>
      <Header />
      <div className="profile">
        <h1 className="profile__title">Привет, Даниэль!</h1>
        <form className="profile__form">
          <label className="profile__label" htmlFor="name">
            Имя
            <input className="profile__input" type="text" placeholder="Имя" defaultValue="Даниэль"  id="profile-name" />
          </label>
          <label htmlFor="email" className="profile__label profile__label_not-line">
            E-mail
            <input className="profile__input" type="email" placeholder="E-mail" defaultValue="daniel@yandex.ru" id="profile-email" required/>
          </label>
          <button className="profile__btn" type="submit">Редактировать</button>
        </form>
        <Link to="/signin" className="profile__link">Выйти из аккаунта</Link>
      </div>
    </>
  )
}
export default Profile;