import React from "react";
import { Dispatch } from "redux";

export default function handleCheckBoxClick(
  event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  id: number,
  task: string,
  isComplete: boolean,
  dispatch: Dispatch
): void {
  event.preventDefault();
  dispatch({
    type: "COMPLETE_TASK",
    payload: { id, task, isComplete: !isComplete },
  });
}
