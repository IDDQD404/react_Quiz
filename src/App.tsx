import React, { useEffect, useState } from "react";
import "./App.css";
import Quiz from "./components/quiz/Quiz";

import { useAppSelector, useAppDispatch } from "./hooks";
import {
  incrementQuestionNumber,
  decrementQuestionNumber,
  setQuestionBody,
  setVariantsAnswers,
  addFailedQuestions,
  setRightAnswer,
  AppCounter,
} from "./AppSlice";
import End from "./components/end/End";

function App() {
  const variables = useAppSelector(AppCounter);
  const dispatch = useAppDispatch();

  const [setFailedQstns, FailedQstns] = useState([]);

  useEffect(() => {
    dispatch(
      setQuestionBody(Questions[variables.QuestionNumber.value].QuestionBody)
    );
    dispatch(
      setVariantsAnswers(
        Questions[variables.QuestionNumber.value].VariantsAnswers
      )
    );
    dispatch(
      setRightAnswer(Questions[variables.QuestionNumber.value].RightAnswer)
    );
  }, [variables.QuestionNumber.value]);

  const Questions = [
    {
      QuestionBody: "What does CSS stand for?",
      VariantsAnswers: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets",
      ],
      FailedQuestions: FailedQstns,
      RightAnswer: "Cascading Style Sheets",
    },

    {
      QuestionBody:
        "What is the correct HTML for referring to an external style sheet?",
      VariantsAnswers: [
        `<style src="mystyle.css">`,
        `<link rel="stylesheet" type="text/css" href="mystyle.css">`,
        `<stylesheet>mystyle.css</stylesheet>`,
      ],
      FailedQuestions: FailedQstns,
      RightAnswer: `<link rel="stylesheet" type="text/css" href="mystyle.css">`,
    },

    {
      QuestionBody:
        "Where in an HTML document is the correct place to refer to an external style sheet?",
      VariantsAnswers: [
        "At the end of the document",
        `In the <body> section`,
        `In the <head> section`,
      ],
      FailedQuestions: FailedQstns,
      RightAnswer: `In the <head> section`,
    },

    {
      QuestionBody: "",
      VariantsAnswers: [],
      FailedQuestions: FailedQstns,
      RightAnswer: ``,
    },
  ];

  return (
    <div className="App">
      {variables.QuestionNumber.value < Questions.length - 1 ? (
        <Quiz
          QuestionLabel={`Question ${variables.QuestionNumber.value + 1}`}
          QuestionBody={variables.QuestionBody.value}
          VariantsAnswer={variables.VariantsAnswers.value}
          FailedQuestions={variables.FailedQuestions.value}
          RightAnswer={variables.RightAnswer.value}
        />
      ) : (
        <End Result={variables.FailedQuestions.value} />
      )}
    </div>
  );
}

export default App;
