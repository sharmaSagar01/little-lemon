import React from "react";
import Nav from "./Nav";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="navbar">
      <img
        className="navbar-logo"
        src="https://jordanbr.pythonanywhere.com/static/restaurant/img/logo.png"
        alt="logo"
        onClick={() => navigate("/")}
      />
      <Nav />
    </header>
  );
};

export default Header;
