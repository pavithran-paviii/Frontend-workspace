import React, { useContext } from "react";
import classNames from "./problems.module.scss";

import { useNavigate } from "react-router-dom";

//assets
import { GlobalContext } from "../../context/GlobalContext";

const Problems = () => {
  //imported items
  const navigate = useNavigate();
  const { allProblems } = useContext(GlobalContext);

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
          {Array?.isArray(allProblems) &&
            allProblems?.length > 0 &&
            allProblems?.map(
              (
                { problemId, question, acceptance, difficulty, ...rest },
                index
              ) => {
                return (
                  <tr
                    key={question + index}
                    onClick={() => {
                      navigate(`/${question}`);
                    }}
                  >
                    <td>Done</td>
                    <td>{index + 1 + "." + question}</td>
                    <td>{acceptance}</td>
                    <td className={classNames.difficulty}>{difficulty}</td>
                  </tr>
                );
              }
            )}
        </tbody>
      </table>
    </div>
  );
};

export default Problems;
