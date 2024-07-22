import React from "react";
import { useState } from "react";
import { Hero } from "../Components/Hero";
import PageLoader from "../Components/PageLoader";
import Footer from "../Components/Footer";
import Reasons from "../Components/Reasons";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <div>
      {/* <PageLoader /> */}
      {isLoading ? <PageLoader /> : ""}
      <Hero />
      <Reasons />
      <Footer />
    </div>
  );
};

export default Home;
