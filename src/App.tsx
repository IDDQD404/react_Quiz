import React, { useState } from "react";
import "./App.css";
import Quiz from "./components/quiz/Quiz";

import { useAppSelector, useAppDispatch } from "./hooks";
import {
  incrementQuestionNumber,
  decrementQuestionNumber,
  AppCounter,
} from "./AppSlice";

function App() {
  const variable = useAppSelector(AppCounter);
  const dispatch = useAppDispatch();

  const Questions = {
    QuestionLabel: `Question ${variable.QuestionNumber.value} of 3`,
    QuestionBody: variable.QuestionBody.value,
    VariantsAnswers: variable.VariantsAnswers.value,
  };

  return (
    <div className="App">
      {/* add redux */}
      <div>
        <div>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrementQuestionNumber())}
          >
            -
          </button>
          <span>{variable.QuestionNumber.value}</span>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(incrementQuestionNumber())}
          >
            +
          </button>
        </div>
      </div>
      {/* <Button text={"dfsdfd"} /> */}
      <Quiz
        QuestionLabel={Questions.QuestionLabel}
        QuestionBody={Questions.QuestionBody}
        VariantsAnswer={Questions.VariantsAnswers}
        FailedQuestions={[true, false]}
      />
    </div>
  );
}

export default App;
