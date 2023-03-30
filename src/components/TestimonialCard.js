import React from "react";
import "../styles/TestimonialCard.css";

const TestimonialCard = ({ image, user, compliment }) => {
  return (
    <div className="container">
      <div className="testimonial-user">
        <img src={image} alt={user} />
      </div>
      <div className="testimonial-content">
        <div className="tetimonial-user">{user}</div>
        <div className="testimonial-compliment">{compliment}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
