import React from "react";

const InputField = ({
  label,
  placeholder,
  value,
  passwordInput,
  firstInput,
  lastInput,
  reponseText,
}) => {
  const rndNum = Math.floor(Math.random() * 35);

  return (
    <div className={firstInput ? "mt-2" : " mt-4"}>
      <label
        htmlFor={rndNum}
        className="font-Grayfel xs:text-[15px] font-black md:text-[20px]"
      >
        {label}
      </label>
      <input
        type={passwordInput ? "password" : "text"}
        className="popup-input block w-full  p-3 rounded-[20px] border-black"
        id={rndNum}
        required
        placeholder={placeholder}
        value={value}
      />
      <p className="text-red-600 text-[13px] font-Outfit">{reponseText}</p>
    </div>
  );
};

export default InputField;
