import React from "react";
import Button from "../button/Button";
import Frame from "../frame/Frame";
import IsChecked from "../ischecked/IsChecked";

export default function Quiz() {
  return (
    <div className="Quiz">
      <Frame
        inner_elements={[
          <>
            <p className="Text-top">Question 1</p>
            <hr />
            <p className="Text-question">Question body</p>
            <Button text={"Variant 1"} />
            <Button text={"Variant 2"} />
            <br />
            <Button text={"Next"} />
            <IsChecked isFailed={false} /> <IsChecked isFailed={true} />
          </>,
        ]}
      />
    </div>
  );
}
