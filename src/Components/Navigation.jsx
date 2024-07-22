import React from "react";
import Logo from "../assets/img/log.png";

const Navigation = ({ onNavButtonClick }) => {
  return (
    <div>
      <div className="nav-wrapper p-4 flex justify-between xs:mx-4 items-center bg-white lg:mx-10 rounded-[50px]">
        <div className="logo xs:w-[40%] md:w-auto">
          <img src={Logo} width={"80%"} className="md:w-[50%] lg:w-[80%]" />
        </div>
        <div
          className="nav-button bg-buttonColor cursor-pointer rounded-[50%]"
          onClick={onNavButtonClick}
        >
          <svg
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="#fff"
          >
            <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
