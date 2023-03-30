import React from "react";
import "../styles/HeroSection.css";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ pageType }) => {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      <div className="hero-description">
        <h1 className="hero-title">LITTLE LEMON</h1>
        <span>Wahington DC, US</span>
        <p className="hero-text">
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet.
        </p>
        {pageType === "home" ? (
          <button className="hero-button" onClick={() => navigate("/booking")}>
            Reserve a Table
          </button>
        ) : (
          <button className="hero-button" onClick={() => navigate("/")}>
            Back to Home
          </button>
        )}
      </div>
      <div className="hero-image">
        <img
          src="https://cdn.eathappyproject.com/wp-content/uploads/2021/10/Types-of-Cuisines-from-Around-the-World-With-their-Popular-Food.jpg"
          alt="food"
        />
      </div>
    </div>
  );
};

export default HeroSection;
