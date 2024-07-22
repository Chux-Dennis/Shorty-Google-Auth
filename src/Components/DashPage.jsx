import React, { useState } from "react";
import DashForm from "./DashForm";
import DashLoader from "./DashLoader";
import DashHeader from "./DashHeader";
import RecentLinks from "./RecentLinks";

const DashPage = () => {
  const [loading, setLoading] = useState(true);
  let details = localStorage.getItem("name");
  let user = JSON.parse(details);

  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <div className="bg-reasons min-h-screen flex flex-col relative">
      {loading ? <DashLoader /> : ""}
      <DashHeader user={user.name} userImage={user.image} />
      <DashForm email={user.email} username={user.name} />
      <RecentLinks email={user.email} />
      <p className="mt-4 mx-6 font-Outfit font-medium text-center text-white mb-10 relative bottom-0 w-ful">
        <span className="flex justify-center items-center text-[12px]">
          Crafted with{" "}
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
          </svg>{" "}
          by &nbsp;
          <a href="https://twitter.com/chuxdennis">Chux Dennis</a>
        </span>
      </p>
    </div>
  );
};

export default DashPage;
