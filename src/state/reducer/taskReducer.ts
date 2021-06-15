import { TaskActionType } from "../action/taskAction";

const initialState = {
  value: [],
};

export interface TaskState {
  value: { id: number; task: string; isComplete: boolean }[];
}

export interface TaskReduxState {
  tasks: { value: { id: number; task: string; isComplete: boolean }[] };
}

function findObjectIndex(state: TaskState, action: TaskActionType) {
  return state.value.findIndex((task) => task.id === action.payload.id);
}

export const taskReducer = (
  state: TaskState = initialState,
  action: TaskActionType
) => {
  switch (action.type) {
    case "ADD_TASK":
      return { value: [...state.value, action.payload] };
    case "COMPLETE_TASK": {
      const objIndex = findObjectIndex(state, action);
      state.value[objIndex]["isComplete"] = action.payload.isComplete;

      return { value: [...state.value] };
    }
    case "DELETE_TASK":
      return {
        value: [...state.value.filter((task) => task.id !== action.payload.id)],
      };
    default:
      return { ...state };
  }
};
