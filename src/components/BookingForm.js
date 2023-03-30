import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import "../styles/BookingForm.css";

const BookingForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(1);
  const [seating, setSeating] = useState("Indoor");

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Form Submitted",
      text: "Your booking has been Submitted..",
      showConfirmButton: false,
      timer: 3000,
    }).then(() => {
      setFullName("");
      setEmail("");
      setPhone("");
      setGuests(1);
      setSeating("Indoor");
    });
    console.log("Form Submitted");
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleSeatingChange = (e) => {
    setSeating(e.target.value);
  };
  return (
    <div className="form-container">
      <h2>Reserve a seat at our Restaurant</h2>
      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="full-name">Full Name</label>
            <input
              type="text"
              id="full-name"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              value={guests}
              onChange={handleGuestsChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="seating">Type of Seating</label>
            <select
              id="seating"
              name="seating"
              value={seating}
              onChange={handleSeatingChange}
              required
            >
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
            </select>
          </div>
          <button type="submit" className="form-submit-btn">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
