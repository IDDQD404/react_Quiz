import React, { useState } from "react";
import Frame from "../frame/Frame";
import IsChecked from "../ischecked/IsChecked";

type EndResults = {
  Result: boolean[];
};
export default function End(args: EndResults) {
  return (
    <div>
      <Frame
        inner_elements={[
          <>
            <h1>Congratulations</h1>
            <hr />
            <h2>Your Result is </h2>

            {args.Result && (
              <div className="CompletedStatus">
                {args.Result.map((Result) => (
                  <IsChecked isFailed={Result} />
                ))}
              </div>
            )}
          </>,
        ]}
      />
    </div>
  );
}
