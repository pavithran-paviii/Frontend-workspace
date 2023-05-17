import React from "react";
import classNames from "./signup.module.scss";

//assets
import leetcodeLogo from "../../assets/images/Logo.svg";

const Signup = () => {
  function handleSignup(event) {
    event.preventDefault();
    const email = event.target.elements?.email?.value;
    const password = event.target.elements?.password?.value;
    console.log(email, password);
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
