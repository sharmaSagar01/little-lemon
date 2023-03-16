import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <img
          src="https://jordanbr.pythonanywhere.com/static/restaurant/img/logo.png"
          alt=""
        />
        <section className="footer-nav">
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
        </section>
        <section className="footer-contact">
          <h1>CONTACT</h1>
          <span>Address: 439 Bridge Avenue,Windsor,ON,Canada</span>
          <span>Phone Number: +1 123456789</span>
          <span>Email: restaurant@gmail.com</span>
        </section>
        <section className="footer-social">
          <h1>SOCIAL MEDIA</h1>
          <span>Facebook</span>
          <span>Instagram</span>
        </section>
      </footer>
    </>
  );
};

export default Footer;
