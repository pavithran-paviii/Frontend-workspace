import React from "react";
import {
  Link,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Problems from "./components/Problems";
import Login from "./components/Login";
import Signup from "./components/Signup";
import EachProblem from "./components/EachProblem";
import Navbar from "./components/Navbar";

const RouterPage = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Problems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/eachproblem" element={<EachProblem />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default RouterPage;

const Root = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      {/* <Link></Link> */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};
