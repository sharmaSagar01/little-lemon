import React from "react";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <>
      <nav>
        <ul className="header-nav">
          <li className="nav-item">
            <a href="/#">HOME</a>
          </li>
          <li className="nav-item">
            <a href="/#">ABOUT</a>
          </li>
          <li className="nav-item">
            <a href="/#">MENU</a>
          </li>
          <li className="nav-item">
            <a href="/#">RESERVATION</a>
          </li>
          <li className="nav-item">
            <a href="/#">ORDER ONLINE</a>
          </li>
          <li className="nav-item">
            <a href="/#">LOGIN</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
