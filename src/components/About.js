import React from "react";
import "../styles/About.css";
const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-body">
        <div className="about-description">
          <h1 className="about-title">LITTLE LEMON</h1>
          <span>Wahington DC, US</span>
          <p className="about-text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here in their infancy.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
