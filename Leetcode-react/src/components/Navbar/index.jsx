import React from "react";
import classNames from "./navbar.module.scss";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classNames.parent}>
      <div className={classNames.navbar}>
        <Link to="/" className={classNames.leftItems}>
          Problems
        </Link>
        <div className={classNames.rightItems}>
          <Link to="/signup">Register</Link>
          <Link to="/login">Sign In</Link>
        </div>
        {/* <Link></Link> */}
      </div>
      <div className={classNames.outletParent}>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
