import React from "react";
import Nav from "./Nav";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="navbar">
      <img
        className="navbar-logo"
        src="https://jordanbr.pythonanywhere.com/static/restaurant/img/logo.png"
        alt="logo"
      />
      <Nav />
    </header>
  );
};

export default Header;
