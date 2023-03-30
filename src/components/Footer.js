import React from "react";
import "../styles/Footer.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <img
        className="footer-logo"
        src="https://jordanbr.pythonanywhere.com/static/restaurant/img/logo.png"
        alt=""
        onClick={() => navigate("/")}
      />
      <div className="footer-nav">
        <h1>NAVIGATION</h1>
        <ul>
          <li>
            <a href="/#">HOME</a>
          </li>
          <li>
            <a href="/#">ABOUT</a>
          </li>
          <li>
            <a href="/#">MENU</a>
          </li>
          <li>
            <a href="/#">RESERVATION</a>
          </li>
          <li>
            <a href="/#">ORDER ONLINE</a>
          </li>
          <li>
            <a href="/#">LOGIN</a>
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <h1>CONTACT</h1>
        <span>Address: 439 Bridge Avenue,Windsor,ON,Canada</span>
        <span>Phone Number: +1 123456789</span>
        <span>Email: restaurant@gmail.com</span>
      </div>
      <div className="footer-social">
        <h1>SOCIAL MEDIA</h1>
        <span>Facebook</span>
        <span>Instagram</span>
      </div>
    </footer>
  );
};

export default Footer;
