import React, { useState } from "react";
import CopiedToClip from "./CopiedToClip";

const ShortnedURL = ({ orignialUrl, shortURL }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (popupOpen) {
    setTimeout(() => {
      setPopupOpen(false);
    }, 2000);
  }

  const copyData = () => {
    navigator.clipboard
      .writeText(`chuxdennis-shorty.vercel.app/r/lb${shortURL}`)
      .then(() => {
        setPopupOpen(true);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="bg-hero p-4 rounded-[10px] xs:mx-6">
      <div className="flex items-center gap-[1rem]">
        <p className="xs:text-[12px] md:text-[1rem] ">
          <a className="text-blue-700 underline" href={shortURL}>
            {" "}
            https://chuxdennis-shorty.vercel.app/r/{shortURL}
          </a>
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          onClick={copyData}
          height="18"
          className="cursor-pointer"
          fill="currentColor"
        >
          <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
        </svg>
      </div>
      {popupOpen ? <CopiedToClip /> : ""}
    </div>
  );
};

export default ShortnedURL;
