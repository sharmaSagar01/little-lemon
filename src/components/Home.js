import React from "react";
import "../styles/Home.css";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section id="hero-section">
          <h1>Hero Section</h1>
        </section>
        <section id="menu-section">
          <h1>Cards</h1>
        </section>
        <section id="testimonial-section">
          <h1>Testimonial</h1>
        </section>
        <section id="about-section">
          <h1>About</h1>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
