import React from "react";
import Shrug from "../assets/img/shrug.png";

const Reasons = () => {
  return (
    <div className="h-[115vh] bg-reasons xs:p-2 lg:p-8 flex justify-center items-center">
      <div>
        <h1 className="font-Grayfel text-[28px] ss:text-[33px] text-white font-black xs:text-[20px] lg:text-5xl text-center">
          Do you really need to shorten your link?
        </h1>
        <p className="text-center md:text-3xl font-Inter text-white">
          Of course you do.But why??
        </p>
        <div className="reason-container lg:mt-16 xs:mx-4 sm:mx-6 flex justify-around items-center lg:flex-row xs:flex-col-reverse">
          <div className="xs:w-full lg:w-[70%]">
            <h1 className="font-Outfit text-white text-4xl xs:text-2xl">
              Hope this convinces you!
            </h1>
            <ul
              className="points-container text-white"
              style={{ listStyleType: "none" }}
            >
              <li className="text-[#f4f4f4] xs:text-[12px] sm:text-[16px] lg:text-[1rem] font-Grayfel font-medium mb-6">
                A shorter link is easier to share and remember,increasing the
                chances of getting clicked and shared too. A shorter link also
                looks more professional and visualy appealing.{" "}
              </li>
              <li className="text-[#f4f4f4] xs:text-[12px] sm:text-[16px] lg:text-[1rem] font-Grayfel font-medium mb-6">
                Short links are perfect for social media platforms with
                character limits , ensuring your links fit perfectly into your
                posts and tweets!. Share your content without sacrificing
                valuable space
              </li>
              <li className="text-[#f4f4f4] xs:text-[12px] sm:text-[16px] lg:text-[1rem] font-Grayfel font-medium mb-6">
                Short links are more secure,as they conceal sensitive
                information and make it harder for malicious users to exploit
                vulnerabilities.{" "}
              </li>
              <li className="text-[#f4f4f4] xs:text-[12px] sm:text-[16px] lg:text-[1rem] font-Grayfel font-medium mb-6">
                A shorter link helps to disguise affliate links or lengthy web
                addresses , making them look more appealing.Protect your afliate
                links and maintain a professional image.{" "}
              </li>
              <li className="text-[#f4f4f4] xs:text-[12px] sm:text-[16px] lg:text-[1rem] font-Grayfel font-medium mb-6">
                Generally,shorter links are more aestheically pleasing and take
                up less space in emails,messages and chat windows.Make your
                communication more concise and effective.
              </li>
            </ul>
          </div>
          <div className="">
            <img
              src={Shrug}
              className="xs:w-[100px] lg:w-[250px] xs:my-4 lg:my-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
