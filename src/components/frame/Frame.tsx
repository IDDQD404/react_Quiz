import React from "react";
import "./Frame.css";

type FrameDetails = {
  inner_elements: any[];
};
export default function Frame(agrs: FrameDetails) {
  return (
    <div className="Frame">
      <div className="Label">{agrs.inner_elements}</div>
    </div>
  );
}
