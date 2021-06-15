import { ChangeLabelActionType } from "../action/labelAction";

const initialState = {
  value: "All",
};

export interface LabelState {
  value: string;
}

export interface LabelReduxState {
  currentLabel: { value: string };
}

export const labelReducer = (
  state: LabelState = initialState,
  action: ChangeLabelActionType
) => {
  switch (action.type) {
    case "CHANGE_LABEL":
      return { value: action.payload };
    default:
      return { ...state };
  }
};
