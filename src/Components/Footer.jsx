import React from "react";
import Image from "../assets/img/no-bg.png";
import Socials from "./Socials";

const returnIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ display: "inline" }}
      width="16"
      height="16"
      fill="red"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path>
    </svg>
  );
};
const Footer = ({ bgColor }) => {
  return (
    <div className="bg-neutral  p-5 ">
      <div className="flex w-full xs:flex-col md:flex-row xs:gap-[20px] justify-between items-center mb-10">
        <div>
          <img src={Image} alt="" />
          <p className="font-Grayfel font-semibold xs:text-[17px] md:text-[20px] p-4">
            Big links,tiny problem.
            <p> Shorten them readily with Shorty.</p>
          </p>
        </div>
        <Socials />
      </div>
      <hr
        style={{ borderTopColor: "rgba(0,0,0,0.4)", borderTopWidth: "2px" }}
      />
      <div className="p-2 flex xs:flex-col md:flex-row justify-between items-center">
        <p className="font-Outfit xs:text-[13px]">
          © {new Date().getFullYear()} || Crafted with {returnIcon()}
          <span> by Chux Dennis</span>
        </p>
        <div className="flex gap-[10px] xs:mt-4 md:mt-[0] justify-between">
          <a href="tel:+234-000-000-000">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="35"
              height="35"
              className=" cursor-pointer xs:w-[20px] xs:h-[20px] md:w-[35px] md:h-[35px]"
              fill="#1b7593"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
            </svg>
          </a>
          <a href="mailto:shortyofficialmail@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="35"
              height="35"
              className="cursor-pointer xs:w-[20px] xs:h-[20px] md:w-[35px] md:h-[35px]"
              fill="#1b7593"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
