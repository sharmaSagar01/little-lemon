import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import "../styles/BookingForm.css";

const BookingForm = ({ availableTimes, dispatchOnDateChange, onSubmit }) => {
  const currentDate = new Date().toISOString().split("T")[0];

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(currentDate);
  const [time, setTime] = useState(availableTimes[0]);
  const [occasion, setOccasion] = useState("None");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(1);
  const [seating, setSeating] = useState("Indoor");

  const isValidName = () => fullName !== "";
  const isValidEmail = () => email !== "";
  const isValidPhone = () => phone !== "";
  const isValidDate = () => date !== "";
  const isValidTime = () => time !== "";
  const isGuestsNumberValid = () => guests !== "";

  const areAllFieldsValid = () => {
    isValidName() &&
      isValidEmail() &&
      isValidDate() &&
      isValidPhone() &&
      isValidTime() &&
      isGuestsNumberValid();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    const formData = {
      fullName,
      email,
      phone,
      date,
      time,
      occasion,
      guests,
      seating,
    };

    console.log("FormData", formData);
    Swal.fire({
      icon: "success",
      title: "Form Submitted",
      text: "Your booking has been Submitted..",
      showConfirmButton: false,
      timer: 3000,
    }).then(() => {
      onSubmit(formData);
    });
    setFullName("");
    setEmail("");
    setPhone("");
    setGuests(1);
    setSeating("Indoor");
    setDate(currentDate);
    setTime(availableTimes[0]);
    setOccasion("None");
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleSeatingChange = (e) => {
    setSeating(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };
  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
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
            {!isValidName ? <p>Please Enter your full name</p> : null}
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
            {!isValidEmail ? <p>Please Enter Email</p> : null}
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
            {!isValidPhone ? <p>Please Enter Phone</p> : null}
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              min={currentDate}
              onChange={handleDateChange}
              required
            />
            {!isValidDate ? <p>Please Choose a valid Date</p> : null}
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <select
              name="time"
              id="time"
              value={time}
              onChange={handleTimeChange}
              required
            >
              {availableTimes.map((item, key) => (
                <option key={key} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {!isValidTime ? <p>Please Choose a Valid Time</p> : null}
          </div>

          <div className="form-group">
            <label htmlFor="occasion">Occasion</label>
            <select
              name="occasion"
              id="occasion"
              value={occasion}
              onChange={handleOccasionChange}
              required
            >
              <option value="none">None</option>
              <option value="Birthday">Birthday</option>
              <option value="Aniversary">Aniversary</option>
              <option value="Date Night">Date Night</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              value={guests}
              onChange={handleGuestsChange}
              required
            />
            {!isGuestsNumberValid ? (
              <p>Please Enter a number between 1 and 10</p>
            ) : null}
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
          <button
            type="submit"
            disabled={!areAllFieldsValid}
            className="form-submit-btn"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
