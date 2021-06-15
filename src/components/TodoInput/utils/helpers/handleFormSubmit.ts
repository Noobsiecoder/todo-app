import React from "react";
import { Dispatch } from "redux";

export default function handleFormSubmit(
  event: React.FormEvent<HTMLFormElement>,
  id: number,
  setId: React.Dispatch<React.SetStateAction<number>>,
  inputValue: string,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  dispatch: Dispatch
) {
  event.preventDefault();
  dispatch({
    type: "ADD_TASK",
    payload: { id, task: inputValue, isComplete: false },
  });
  setId(id + 1);
  setInputValue("");
}
