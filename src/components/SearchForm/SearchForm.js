import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SearchIcon from "../../images/icon-search.svg"


function SearchForm() {

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" noValidate>
          <img className="search__icon" src={SearchIcon} alt="Поиск"/>
          <input className="search__input" id="search" type="text" placeholder="Фильм" minLength="1" maxLength="50" required/>
          <button className="search__btn" type="submit" ></button>
        </form>
        <FilterCheckbox/>
      </div>
  </section>
  )
}
export default SearchForm;
