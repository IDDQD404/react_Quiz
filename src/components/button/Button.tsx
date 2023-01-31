import React from "react";
import "./Button.css";

type ButtonArgs = {
  text: string;
};

export default function Button(args: ButtonArgs) {
  return <div className="Button">{args.text}</div>;
}
