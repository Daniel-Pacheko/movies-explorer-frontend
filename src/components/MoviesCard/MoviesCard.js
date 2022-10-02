import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({ statusBtn, movie, onSaveMovie, onDeleteMovie }) {

  const serverUrl = 'https://api.nomoreparties.co';
  let location = useLocation();

  function handleSubmit() {
    const movieData = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: serverUrl + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: serverUrl + movie.image.formats.thumbnail.url,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      movieId: movie.id,
    }
    onSaveMovie(movieData);
  }

  function handleDelete() {
    onDeleteMovie(movie.id === undefined ? movie.movieId : movie.id)
  }

  function convertDuration() {
    if (movie.duration > 60) {
      return (movie.duration / 60 | 0) + "ч " + movie.duration % 60 + "м"
    }
    if (movie.duration === 60) {
      return (movie.duration / 60) + "ч"
    } else {
      return movie.duration + " минут"
    }
  }

  return (
    <li className="movie">
      <div className="movie__content">
        <div className="movie__container">
          <h1 className="movie__title">{movie.nameRU}</h1>
          <p className="movie__time">{convertDuration()}</p>
        </div>
       
        {statusBtn === "save" && (
          <button className="movie__btn movie__btn_type_save" type="button" onClick={handleSubmit}></button>
        )}
        {statusBtn === "delete" && (
          <button className="movie__btn movie__btn_type_delete" type="button" onClick={handleDelete}></button>
        )}
        {statusBtn === "saved" && (
          <button className="movie__btn movie__btn_type_active" type="button" onClick={handleDelete}></button>
        )}
      </div>
      <a className="movie__trailerlink" target="blank" href={movie.trailerLink}>
          <img className="movie__poster" src={location.pathname === '/movies' ? serverUrl + movie.image.url : movie.image} alt={movie.nameRU} />
        </a>
    </li>
  )
}
export default MoviesCard;