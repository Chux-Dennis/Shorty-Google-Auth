import React, { useState } from "react";
import Navigation from "./Navigation";
import Popup from "./Popup";
import Image from "../assets/link.png";

const Hero = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleNavButtonClick = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="bg-hero font-Inter pt-10 xs:pb-[100px] md:pb-[0] xs:h-screen sm:h-fit">
      <Navigation onNavButtonClick={handleNavButtonClick} />
      {isPopupVisible && (
        <Popup onClose={closePopup} booleanVal={isPopupVisible} />
      )}
      <div className="hero-wrapper flex justify-center lg:flex-row xs:flex-col-reverse flex-col-reverse lg:gap-6 items-center mx-10 lg:mt-[-120px]">
        <div>
          <h1 className="font-Grayfel text-[28px] font-extrabold xs:text-3xl md:text-6xl sm:text-5xl lg:text-7xl">
            <p>Tiny Links</p>
            <p className="md:mt-4">
              Great Convenience<span className="text-buttonColor">.</span>
            </p>
          </h1>
          <p className="mt-4 font-Grayfel">
            Simplify your workflow and share with ease using our advanced,
            customizable links.
            <br /> Streamline your online sharing experience with our fast and
            reliable online tool.
          </p>
          <button
            className="bg-buttonColor  lg:hover:scale-105 mt-3 p-3 rounded-[15px] text-white"
            onClick={handleNavButtonClick}
            style={{ transition: "0.35s" }}
          >
            Get Started
          </button>
        </div>
        <div className="hero-img w-5/12">
          <img src={Image} width={"150%"} />
        </div>
      </div>
    </div>
  );
};

export { Hero };
