import React from "react";
import About from "./About";
import BookingForm from "./BookingForm";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";

const BookingPage = () => {
  const pageType = "booking";
  return (
    <>
      <Header />
      <main>
        <HeroSection pageType={pageType} />
        <BookingForm />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
