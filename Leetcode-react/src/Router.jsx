import React from "react";
import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Problems from "./components/Problems";
import Login from "./components/Login";
import Signup from "./components/Signup";
import EachProblem from "./components/EachProblem";

const RouterPage = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/eachproblem" component={EachProblem} />
      </Switch>
    </Router>
  );
};

export default RouterPage;
