import React from "react";
import "../styles/Card.css";

const Card = ({ image, title, price, description }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <div className="card-header">
          <div className="card-title">{title}</div>
          <div className="card-price">{price}</div>
        </div>
        <div className="card-description">{description}</div>
        <button className="card-button">Order for Delivery</button>
      </div>
    </div>
  );
};

export default Card;
