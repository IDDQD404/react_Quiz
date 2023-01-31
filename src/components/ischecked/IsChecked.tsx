import React from "react";
import "./IsChecked.css";
import { Check, Close } from "@mui/icons-material";

type Check = {
  isFailed: boolean;
};

export default function IsChecked(args: Check) {
  return (
    <>
      {args.isFailed ? (
        <div className="IsChecked">
          <Close sx={{ fontSize: 100 }} />
        </div>
      ) : (
        <div className="IsChecked">
          <Check sx={{ fontSize: 100 }} />
        </div>
      )}
    </>
  );
}
