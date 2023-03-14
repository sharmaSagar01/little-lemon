import React from "react";
import Nav from "./Nav";
const Footer = () => {
  return (
    <>
      <footer>
        <img src="" alt="" />
        <div>
          <h1>NAVIGATION</h1>
          <Nav />
        </div>
        <div>
          <h1>CONTACT</h1>
          <span>Address: 439 Bridge Avenue,Windsor,ON,Canada</span>
          <span>Phone Number: +1 123456789</span>
          <span>Email: restaurant@gmail.com</span>
        </div>
        <div>
          <h1>Social Media</h1>
          <span>Facebook</span>
          <span>Instagram</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
