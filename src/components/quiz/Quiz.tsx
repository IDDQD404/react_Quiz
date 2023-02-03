import React from "react";
import Button from "../button/Button";
import Frame from "../frame/Frame";
import IsChecked from "../ischecked/IsChecked";

import {
  incrementQuestionNumber,
  decrementQuestionNumber,
  setQuestionBody,
  setVariantsAnswers,
  addFailedQuestions,
  setRightAnswer,
  AppCounter,
} from "../../AppSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

type QuizElements = {
  QuestionLabel: string;
  QuestionBody: string;
  VariantsAnswer: string[];
  FailedQuestions: boolean[];
  RightAnswer: string;
};

export default function Quiz(args: QuizElements) {
  const variables = useAppSelector(AppCounter);
  const dispatch = useAppDispatch();

  function selectAnswer(answer: string) {
    if (answer == args.RightAnswer) {
      dispatch(addFailedQuestions(false));
    } else {
      dispatch(addFailedQuestions(true));
    }

    dispatch(incrementQuestionNumber());
  }

  return (
    <div className="Quiz">
      <Frame
        inner_elements={[
          <>
            <p className="Text-top">{args.QuestionLabel}</p>
            <hr />
            <p className="Text-question">{args.QuestionBody}</p>

            {args.VariantsAnswer &&
              args.VariantsAnswer.map((Variant) => (
                <div
                  onClick={() => {
                    selectAnswer(Variant);
                  }}
                >
                  <Button text={Variant} />
                </div>
              ))}

            <br />
            <br />
            {/* <div
              style={{ width: "10%", margin: "10px" }}
              onClick={() => {
                dispatch(incrementQuestionNumber())
              }}
            >
              <Button text={"Next"} />
            </div> */}

            <div>Right is {args.RightAnswer}</div>

            {args.FailedQuestions && (
              <div className="CompletedStatus">
                {args.FailedQuestions.map((FailedStatus) => (
                  <IsChecked isFailed={FailedStatus} />
                ))}
              </div>
            )}
          </>,
        ]}
      />
    </div>
  );
}
