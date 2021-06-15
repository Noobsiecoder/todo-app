import React from "react";
import { Dispatch } from "redux";

export default function handleLabelChange(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  label: string,
  dispatch: Dispatch
): void {
  event.preventDefault();
  dispatch({ type: "CHANGE_LABEL", payload: label });
}
