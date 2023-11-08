import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BACKEND_URL } from "../assets/data/constant";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  //problem values
  const [allProblems, setAllProblems] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/problem`)
      .then((response) => {
        setAllProblems(response?.data);
      })
      .catch((error) => {
        console.log(error?.message, "all problems error");
      });
  }, []);

  return (
    <GlobalContext.Provider value={{ allProblems, setAllProblems }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
