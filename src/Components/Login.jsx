import React from "react";
import { useState } from "react";
import InputField from "./InputField";
import SubmitBtn from "./SubmitBtn";
import { matchUserPassword } from "../../db/getUsers";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState("");

  const navigate = useNavigate();

  const submitFunc = (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;

    matchUserPassword(email, password).then((response) => {
      // console.log(response);
      if (response) {
        const [matchedPassword, name] = response;
        if (matchedPassword) {
          const userDetails = {
            name: name,
            email: email,
            image: false,
          };
          const JSONuserDetails = JSON.stringify(userDetails);
          localStorage.setItem("name", JSONuserDetails);

          navigate("/dashboard");
        } else {
          setLoginFailed("Wrong username or password");
        }
      } else {
        setLoginFailed("Wrong username or password");
      }
    });
  };
  return (
    <div>
      <form action="" onSubmit={submitFunc}>
        <InputField
          firstInput={true}
          label={"Email Address"}
          placeholder={"Enter your registered email."}
        />
        <InputField
          label={"Password"}
          passwordInput={true}
          placeholder={"Enter your password"}
          reponseText={loginFailed}
        />
        <SubmitBtn />
      </form>
    </div>
  );
};

export default Login;
