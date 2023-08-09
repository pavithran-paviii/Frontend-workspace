import React, { useEffect, useState } from "react";
import classNames from "./problems.module.scss";

import axios from "axios";

const Problems = () => {
  const [allProblems, setAllProblems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/problem")
      .then((response) => {
        console.log(response?.data, "all problem response");
        setAllProblems(response?.data);
      })
      .catch((error) => {
        console.log(error?.message, "all problems error");
      });
  }, []);

  return (
    <div className={classNames.problems}>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Title</th>
            <th>Acceptance</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {Array?.isArray(allProblems) && allProblems?.length > 0
            ? allProblems?.map(
                ({ problemId, question, acceptance, difficulty }, index) => {
                  return (
                    <tr>
                      <td>Done</td>
                      <td>{problemId + "." + question}</td>
                      <td>{acceptance}</td>
                      <td className={classNames.difficulty}>{difficulty}</td>
                    </tr>
                  );
                }
              )
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default Problems;
