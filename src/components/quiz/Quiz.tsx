import React from "react";
import Button from "../button/Button";
import Frame from "../frame/Frame";
import IsChecked from "../ischecked/IsChecked";

type QuizElements = {
  QuestionLabel: string;
  QuestionBody: string;
  VariantsAnswer: string[];
  FailedQuestions: boolean[];
};

export default function Quiz(args: QuizElements) {
  return (
    <div className="Quiz">
      <Frame
        inner_elements={[
          <>
            <p className="Text-top">{args.QuestionLabel}</p>
            <hr />
            <p className="Text-question">{args.QuestionBody}</p>

            {args.VariantsAnswer &&
              args.VariantsAnswer.map((Variant) => <Button text={Variant} />)}

            <br />
            <br />
            <div style={{ width: "10%", margin: "10px" }}>
              <Button text={"Next"} />
            </div>

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
