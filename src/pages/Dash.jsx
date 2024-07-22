import React from "react";
import DashPage from "../Components/DashPage";
import Home from "./Home";

const Dash = () => {
  let checkAuthenticity = Object.keys(localStorage).length > 0;

  return (
    <div>
      <div>{checkAuthenticity ? <DashPage /> : <Home />}</div>
    </div>
  );
};

export default Dash;
