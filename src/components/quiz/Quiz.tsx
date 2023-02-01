import React from "react";
import Button from "../button/Button";
import Frame from "../frame/Frame";
import IsChecked from "../ischecked/IsChecked";

type QuizElements = {
  QuestionLabel: string;
  QuestionBody: string;
  VariantsAnswer: string[];
  CompletedQuestions: boolean[];
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

            {args.CompletedQuestions && (
              <div className="CompletedStatus">
                {args.CompletedQuestions.map((CompeletStatus) => (
                  <IsChecked isFailed={CompeletStatus} />
                ))}
              </div>
            )}
          </>,
        ]}
      />
    </div>
  );
}
