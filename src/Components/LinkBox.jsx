import React from "react";
import { dateRefractor } from "../../lib/dateRefractor";
const insertLineBreaks = (text, maxLength) => {
  const regex = new RegExp(`.{1,${maxLength}}`, "g");
  return text.match(regex).join("\n");
};

const LinkBox = ({ longURL, shortURL, date }) => {
  const formattedText = insertLineBreaks(longURL, 15);
  return (
    <div className="border-2 border-blue-400 p-4 rounded-[20px] mb-6">
      <div className="flex justify-between xs:items-center xs:flex-col-reverse sm:flex-row">
        <div className="left-panel flex gap-4 items-center">
          <span className="xs:hidden sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
            </svg>
          </span>
          <div className="xs:mt-4 lg:mt-0">
            <h2 className="cursor-pointer xs:text-center md:text-left hover:underline text-[1.5rem] font-Grayfel text-blue-500">
              {formattedText}
            </h2>
            <p className="text-white xs:text-center sm:text-left text-[13px] my-2 font-Outfit">
              {`https://chuxdennis-shorty.vercel.app/r/${shortURL}`}
            </p>
            <p className="opacity-45 xs:text-center sm:text-left text-[10px] font-Radio text-white">
              {dateRefractor(date.toDate())}
            </p>
          </div>
        </div>
        <div className="right-panel">
          <div className="w-[100px] h-[100px]">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?data=chuxdennis-shorty.vercel.app/${shortURL}&amp;size=50x50`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkBox;
