import React from "react";
import "../styles/Home.css";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Menu from "./Menu";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        <Menu />

        <Testimonial />

        <About />
      </main>
      <Footer />
    </>
  );
};

export default Home;
