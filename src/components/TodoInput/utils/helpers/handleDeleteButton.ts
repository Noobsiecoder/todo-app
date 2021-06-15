import React from "react";
import { Dispatch } from "redux";

export default function handleDeleteButton(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  id: number,
  task: string,
  isCompleted: boolean,
  dispatch: Dispatch
) {
  event.preventDefault();
  dispatch({ type: "DELETE_TASK", payload: { id, task, isCompleted } });
}
