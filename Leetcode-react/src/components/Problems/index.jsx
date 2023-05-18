import React from "react";
import classNames from "./problems.module.scss";

const Problems = () => {
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
          <tr>
            <td>Done</td>
            <td>2130. Maximum Twin Sum of a Linked List</td>
            <td>82.8%</td>
            <td className={classNames.difficulty}>Medium</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Problems;
