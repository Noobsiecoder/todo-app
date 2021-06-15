import { Action, ActionCreator } from "redux";

const changeLabel = "CHANGE_LABEL";

export type ChangeLabelActionType = {
  type: string;
  payload: string;
};

export const changeLabelAction: ActionCreator<Action> = (
  label: string
): ChangeLabelActionType => ({
  type: changeLabel,
  payload: label,
});
