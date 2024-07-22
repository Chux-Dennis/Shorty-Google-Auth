import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-container h-screen flex flex-col justify-center items-center">
      <h1 className="font-Radio xs:text-[5rem] md:text-[7rem] lg:text-[20rem]">
        404
      </h1>
      <div className="text-center font-Outfit">
        <p>PAGE NOT FOUND</p>
        <p>
          LET'S GET YOU BACK TO THE{" "}
          <Link to="/" className=" underline">
            FUN STUFF
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
