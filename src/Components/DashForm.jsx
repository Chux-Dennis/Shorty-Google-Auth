import React, { useState } from "react";
import murmur from "murmurhash-js";
import ShortnedURL from "./ShortnedURL";
import { setLinks } from "../../db/addLinkCol";

const DashForm = ({ username, email }) => {
  const [showResult, setShowResult] = useState(false);
  const [orignialUrl, setOriginalUrl] = useState("");
  const [shortURL, setShortUrl] = useState("");

  const submitLink = (e) => {
    e.preventDefault();
    let x = murmur(e.target[0].value, 0);
    let y = e.target[0].value;
    let finalX = `lb${x}`;
    setLinks(y, finalX, email, username);
    setOriginalUrl(e.target[0].value);
    setShortUrl(x);

    setShowResult(true);
  };
  return (
    <div>
      <div className="flex flex-col my-12 items-center font-N justify-center">
        <h1 className="text-white font-Grayfel my-4  xs:text-[2rem] sm:text-[2.5rem] xs:text-center md:text-[4rem]">
          Streamline your workflow today.
        </h1>
        <form
          action=""
          onSubmit={submitLink}
          className="flex pb-6 w-[100%] justify-center  basis-4-[3]"
        >
          <input
            type="text"
            className="p-3 outline-none w-[70%]"
            placeholder="Enter URL here to shorten it"
          />
          <button className="p-3 bg-buttonColor text-white ">Shorten</button>
        </form>
        {showResult ? (
          <ShortnedURL orignialUrl={orignialUrl} shortURL={shortURL} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DashForm;
