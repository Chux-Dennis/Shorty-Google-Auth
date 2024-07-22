import React, { useState } from "react";
import GoogleBtn from "./GoogleBtn";
import SignUp from "./SignUp";
import Login from "./Login";

const Popup = ({ onClose, booleanVal }) => {
  const [signUpField, setSignUpField] = useState(true);
  const [logInField, setLoginField] = useState(false);

  return (
    <div
      className="bg-[rgb(0,0,0,.7)] flex justify-center items-baseline z-[100] h-screen top-0 left-0 w-full"
      style={{ position: booleanVal ? "fixed" : "hidden" }}
    >
      <div className="popup-wrapper relative rounded-[15px] bg-white z-10 p-8 w-[650px] h-[650px]">
        <div
          className="close-button absolute top-[15px] right-[15px] cursor-pointer "
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="19"
            height="19"
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path>
          </svg>
        </div>
        <h1 className="font-Grayfel font-black xs:text-[20px] md:text-4xl text-center">
          Welcome Back
        </h1>
        <p className="text-center font-medium font-Grayfel xs:text-[13px] md:text-[1rem]">
          Join thousands of users that maximize their online productivity and
          streamline online sharing.
        </p>
        <GoogleBtn signUpEnabled={signUpField} />
        <p className="text-center mt-5">OR</p>
        <div className="form-wrapper">
          {signUpField && <SignUp />}
          {signUpField && (
            <p className="text-center">
              Already signed up?{" "}
              <span
                className="cursor-pointer underline"
                onClick={() => {
                  setSignUpField(!signUpField);
                  setLoginField(!logInField);
                }}
              >
                Login
              </span>
            </p>
          )}
          {logInField && <Login />}
          {logInField && (
            <p className="text-center">
              Don't have an account?
              <span
                className="cursor-pointer underline"
                onClick={() => {
                  setSignUpField(!signUpField);
                  setLoginField(!logInField);
                }}
              >
                Register
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
