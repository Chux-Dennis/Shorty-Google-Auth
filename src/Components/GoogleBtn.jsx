import React, { useState } from "react";
import { auth, provider } from "../../lib/authPopup";
import { signInWithPopup } from "firebase/auth";
import "firebase/auth";
import { setData } from "../../db/addUser";
import { matchAndFindUser } from "../../db/getUsers";
import { useNavigate, redirect } from "react-router-dom";
import Dash from "../pages/Dash";

const GoogleBtn = ({ signUpEnabled }) => {
  const [failedLogin, setFailedLogin] = useState("");
  localStorage.clear();
  const navigate = useNavigate();

  const logInFunc = function () {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data);
      setData(data.user.displayName, data.user.email, data.user.uid);
      matchAndFindUser(data.user.email).then((val) => {
        if (val) {
          console.log("User found");

          // .clear() clears existing saved user's info from browsers
          localStorage.clear();
          const userDetails = {
            name: data._tokenResponse.firstName,
            image: data.user.photoURL,
            email: data._tokenResponse.email,
          };
          const JSONuserDetails = JSON.stringify(userDetails);
          localStorage.setItem("name", JSONuserDetails);
          navigate("/dashboard");
        } else {
          setFailedLogin("Email not recognized.Sign up with Google first.");
        }
      });
    });
  };
  const signUpFunc = function () {
    signInWithPopup(auth, provider).then((data) => {
      setData(data.user.displayName, data.user.email, data.user.uid);
      console.log(data.user);
      const userDetails = {
        name: data._tokenResponse.firstName,
        email: data._tokenResponse.email,
        image: data.user.photoURL,
      };
      const JSONuserDetails = JSON.stringify(userDetails);
      localStorage.setItem("name", JSONuserDetails);
      setTimeout(navigate("/dashboard"), 2500);
    });
  };
  return (
    <div>
      <div
        onClick={signUpEnabled ? signUpFunc : logInFunc}
        className="google-btn flex items-center justify-evenly gap-[-100px] mt-2 rounded-[15px] p-2 border-black border-solid border-[1px] cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="25"
          height="25"
          fill="#003049"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path>
        </svg>
        <p className="text-center xs:text-[15px] md:text-[20px]">
          Continue with Google
        </p>
      </div>

      <p className="text-red-600 text-[13px] font-Outfit">{failedLogin}</p>
    </div>
  );
};

export default GoogleBtn;
