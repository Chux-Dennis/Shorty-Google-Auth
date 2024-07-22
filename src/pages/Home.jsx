import React from "react";
import Navigation from "../Components/Navigation";
import { Hero } from "../Components/Hero";
import Footer from "../Components/Footer";
import Reasons from "../Components/Reasons";

const Home = () => {
  return (
    <div>
      <Hero />
      <Reasons />
      <Footer />
    </div>
  );
};

export default Home;
