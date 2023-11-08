import React from "react";
import classNames from "./login.module.scss";

import axios from "axios";

//assets
import { BACKEND_URL } from "../../assets/data/constant";
import leetcodeLogo from "../../assets/images/Logo.svg";

const Login = () => {
  function handleLogin(event) {
    event.preventDefault();
    const email = event.target.elements?.email?.value;
    const password = event.target.elements?.password?.value;

    axios
      .post(`${BACKEND_URL}/login`, { email, password })
      .then((response) => {
        console.log(response?.data, "Login API response");
        // setAllProblems(response?.data);
      })
      .catch((error) => {
        console.log(error?.message, "Login APIs error");
      });
  }

  return (
    <div className={classNames.login}>
      <div className={classNames.loginContainer}>
        <img src={leetcodeLogo} alt="logo" />
        <form onSubmit={handleLogin} className={classNames.loginForm}>
          <div className={classNames.inputContainer}>
            <input type="text" name="email" placeholder="Username or E-mail" />
          </div>
          <div className={classNames.inputContainer}>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
