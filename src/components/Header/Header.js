import "./Header.css"
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import MainMenu from "../Navigation/MainMenu/MainMenu";
import Menu from "../Navigation/Menu/Menu";
import React from "react";

function Header({ isLoggedIn }) {

  return (
    <header className="header" >
      <Navigation>
        <Logo />
        {isLoggedIn === true ? <Menu /> : <MainMenu />}
      </Navigation>
    </header>
  )
}
export default Header;

