import React from "react";
import "./AboutMe.css";
import photo from "../../../images/Photos.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__profile">
          <h3 className="about-me__name">Даниэль</h3>
          <p className="about-me__profession">Фронтенд-разработчик, 24 года</p>
          <p className="about-me__description">
            Я родился и живу в Москве, учусь в инстетуте Синергия на факультете маркетинг и реклама.
            Я люблю слушать музыку, ходить в тренажерный зал и кататься на сноуборде.
            В 2021 году пошел учиться на Фронтенд-разработчикаюю
            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="about-me__social">
            <li><a className="about-me__link" href="https://github.com/Daniel-Pacheko" target="_blank" rel="noopener noreferrer">Github</a></li>
          </ul>
        </div>
        <img className="about-me__photo" src={photo} alt="Фотография"/>
      </div>
    </section>
  )
}

export default AboutMe;
