import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Problems from "./components/Problems";
import EachProblem from "./components/EachProblem";
import RouterPage from "./router";

function App() {
  return (
    <div className="app">
      {/* <RouterPage /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      <Problems />
      {/* <EachProblem /> */}
    </div>
  );
}

export default App;
