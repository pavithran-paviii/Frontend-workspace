import React, { useContext, useEffect, useState } from "react";
import classNames from "./eachproblem.module.scss";
import { useParams } from "react-router-dom";

//imported
import { GlobalContext } from "../../context/GlobalContext";

const EachProblem = () => {
  const { question } = useParams();
  const { allProblems } = useContext(GlobalContext);

  const [selectedProblem, setSelectedProblem] = useState([]);

  //equation values
  let difficultyLevel = Number(selectedProblem?.difficulty?.replace("%", ""));

  useEffect(() => {
    let filteredValue = allProblems?.filter(
      (eachProblem) => eachProblem?.question == question
    );
    if (filteredValue?.length > 0) {
      setSelectedProblem(filteredValue[0]);
    }
  }, [allProblems]);

  return (
    <div className={classNames.eachProblem}>
      <div className={classNames.title}>{selectedProblem?.question}</div>
      <div
        className={`${classNames.difficultyIndicator} ${
          difficultyLevel > 80
            ? classNames.difficultyHard
            : difficultyLevel >= 50
            ? classNames.difficultyMedium
            : classNames.difficultyEasy
        }`}
      >
        {selectedProblem?.difficulty}
      </div>
      <div className={classNames.description}>
        {selectedProblem?.description}
      </div>
    </div>
  );
};

export default EachProblem;
