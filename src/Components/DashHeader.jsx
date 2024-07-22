import React from "react";
import image from "../assets/img/icon-img.png";

const DashHeader = ({ user, userImage }) => {
  const checkImageAvailability = () => {
    switch (typeof userImage) {
      case "boolean":
        return image;

      case "string":
        return userImage;
        break;

      default:
        break;
    }
  };

  return (
    <div className="bg-blue-600">
      <div className="flex pt-4 pb-4 xs:mx-6 lg:mx-20 justify-between items-center">
        <h1 className="font-Inter text-[#f4f4f4]  xs:text-[1rem] md:text-[2rem]">
          Wagwan👋, {user}
        </h1>
        <img
          src={checkImageAvailability()}
          className="xs:w-[35px] md:w-[50px] rounded-[50%]"
        />
      </div>
    </div>
  );
};

export default DashHeader;
