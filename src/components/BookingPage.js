import React from "react";
import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import About from "./About";
import BookingForm from "./BookingForm";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import { fetchAPI, submitAPI } from "../utils/api";

const updateTime = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTime = (initialAvaialableTimes) => {
  return [...initialAvaialableTimes, ...fetchAPI(new Date())];
};
const BookingPage = () => {
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTime,
    [],
    initializeTime
  );
  const pageType = "booking";
  const navigate = useNavigate();
  const onSubmit = (formData) => {
    const response = submitAPI(formData);
    if (response) {
      navigate("/confirmation-page");
    }
  };

  return (
    <>
      <Header />
      <main>
        <HeroSection pageType={pageType} />
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          onSubmit={onSubmit}
        />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
