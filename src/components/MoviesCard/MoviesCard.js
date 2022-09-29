import React from "react";
import "./MoviesCard.css";
import movie from "../../images/movie6.jpg";

function MoviesCard({ statusBtn }) {
  
  return (
    <li className="movie">
      <div className="movie__content">
        <div className="movie__container">
        <h1 className="movie__title">33 слова о дизайне</h1>
        <p className="movie__time">1ч 47м</p>
        </div>
        {statusBtn === "save" && (
         <button className="movie__btn movie__btn_type_save" type="button"></button>
        )}
       {statusBtn === "delete" && (
         <button className="movie__btn movie__btn_type_delete" type="button"></button>
        )}
        {statusBtn === "saved" && (
         <button className="movie__btn movie__btn_type_active" type="button"></button>
        )}
      </div>
      <img className="movie__poster" src={movie} alt="Постер к фильму" />
       
    </li>
  )
}

export default MoviesCard;