import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesButton from "../MoviesButton/MoviesButton";
import MoviesCard from "../MoviesCard/MoviesCard";
// import Preloader from "../Preloader/Preloader";


function Movies() {

  return (
    <>
      <Header />
      <main className="content">
      <SearchForm />
      <MoviesCardList>
        <MoviesCard 
          statusBtn = "saved"
        />
        <MoviesCard 
          statusBtn = "saved"
        />
        <MoviesCard 
          statusBtn = "save"
        />
        <MoviesCard 
          statusBtn = "save"
        />
        <MoviesCard 
          statusBtn = "saved"
        />
        <MoviesCard 
          statusBtn = "save"
        />
        <MoviesCard 
          statusBtn = "save"
        />
        <MoviesCard 
          statusBtn = "save"
        />
        <MoviesCard 
          statusBtn = "saved"
        />
        <MoviesCard 
          statusBtn = "saved"
        />
        <MoviesCard 
          statusBtn = "save"
        />
        <MoviesCard 
          statusBtn = "save"
        />
      </MoviesCardList>
      <MoviesButton />
      </main>
      <Footer />
    </>
  )
}
export default Movies;