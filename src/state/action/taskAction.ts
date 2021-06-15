import { Action, ActionCreator } from "redux";

export type TaskActionType = {
  type: "ADD_TASK" | "COMPLETE_TASK" | "DELETE_TASK";
  payload: { id: number; task: string; isComplete: boolean };
};

export const changetaskAction: ActionCreator<Action> = (
  type: "ADD_TASK" | "COMPLETE_TASK" | "DELETE_TASK",
  label: {
    id: number;
    task: string;
    isComplete: boolean;
  }
): TaskActionType => ({
  type: type,
  payload: label,
});
