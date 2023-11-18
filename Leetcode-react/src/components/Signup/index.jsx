import React, { useState } from "react";
import classNames from "./signup.module.scss";

//assets
import leetcodeLogo from "../../assets/images/Logo.svg";
import { BACKEND_URL } from "../../assets/data/constant";
import axios from "axios";

const Signup = () => {
  const [createUser, setCreateUser] = useState("");
  const [message, setMessage] = useState("");

  function handleSignup(event) {
    event.preventDefault();
    const email = event.target.elements?.email?.value;
    const password = event.target.elements?.password?.value;
    const username = event.target.elements?.username?.value;

    axios
      .post(`${BACKEND_URL}/signup`, { username, email, password })
      .then((response) => {
        setCreateUser(response?.data);
        setMessage(response?.data?.message);
        console.log(response, "create user");
      })
      .catch((error) => {
        setMessage(error?.response?.data?.message);
        console.log(error, "create user error");
      });
  }

  return (
    <div className={classNames.signup}>
      <div className={classNames.signupContainer}>
        <img src={leetcodeLogo} alt="logo" />
        <form onSubmit={handleSignup} className={classNames.signupForm}>
          <div className={classNames.inputContainer}>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className={classNames.inputContainer}>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className={classNames.inputContainer}>
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm password"
            />
          </div>
          <div className={classNames.inputContainer}>
            <input type="email" name="email" placeholder="E-mail address" />
          </div>
          <div style={{ display: message ? "" : "none" }}>{message}</div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
