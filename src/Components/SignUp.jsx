import React from "react";
import { useState } from "react";
import InputField from "./InputField";
import SubmitBtn from "./SubmitBtn";
import { setData } from "../../db/addUser";
import { matchAndFindUser } from "../../db/getUsers";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failedSignUp, setFailedSignUp] = useState("");

  const navigate = useNavigate();
  const submitFunc = (e) => {
    e.preventDefault();

    if (
      e.target[0].value === "" &&
      (e.target[0].value === "") & (e.target[0].value === "")
    ) {
      setFailedSignUp("All fields are required.Please fill all");
    } else {
      setData(e.target[0].value, e.target[1].value, e.target[2].value);

      // Checking if email already exists on the database
      matchAndFindUser(e.target[1].value).then((val) => {
        if (val) {
          setFailedSignUp("Email is already taken.Try another one");
        } else {
          const userDetails = {
            name: e.target[0].value,
            email: e.target[1].value,
            image: false,
          };

          // Saving user's email on browser local storage
          const JSONuserDetails = JSON.stringify(userDetails);
          localStorage.setItem("name", JSONuserDetails);

          // Redirect to dashboard
          navigate("/dashboard");
        }
      });
    }
  };
  return (
    <div>
      <form action="" onSubmit={submitFunc}>
        <InputField
          label={"Enter your fullname"}
          firstInput={true}
          placeholder={"eg:Emeka Tha Stallion"}
        />
        <InputField
          label={"Email Address"}
          placeholder={"eg:tha.stallion@gmail.com"}
        />
        <InputField
          label={"Set Password"}
          passwordInput={true}
          placeholder={"Enter a secure password"}
          reponseText={failedSignUp}
        />
        <SubmitBtn />
      </form>
    </div>
  );
};

export default SignUp;
