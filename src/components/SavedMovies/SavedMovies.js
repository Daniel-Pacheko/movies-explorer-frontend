import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";



function SavedMovies() {

  return (
    <>
      <Header />
      <main className="content">
      <SearchForm />
      <MoviesCardList>
        <MoviesCard 
          statusBtn = "delete"
        />
        <MoviesCard 
          statusBtn = "delete"
        />
        <MoviesCard 
          statusBtn = "delete"
        />
      </MoviesCardList>
      </main>
      <Footer />
    </>
  )
}
export default SavedMovies;